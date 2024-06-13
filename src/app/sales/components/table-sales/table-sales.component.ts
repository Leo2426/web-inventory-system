import {Component, OnDestroy, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {MessageService, SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {Sale} from "../../model/sale";
import {ToastModule} from "primeng/toast";
import {Product} from "../../../inventory/model/product";

@Component({
  selector: 'app-table-sales',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule,
    InputTextModule,
    PaginatorModule,
    SharedModule,
    TableModule,
    ToastModule
  ],
  templateUrl: './table-sales.component.html',
  styleUrl: './table-sales.component.css'
})
export class TableSalesComponent implements OnInit, OnDestroy {
  visibleEditForm: boolean = false;
  visibleAddForm: boolean = false;
  sales: Sale[] = [];
  selectedSale: Sale = {} as Sale;
  saleToEdit: Sale = {} as Sale;
  saleToAdd = {
    productId: 0,
    quantity: 0,
  };

  products: Product[] = [];

  constructor(private messageService: MessageService) {
    const initialSales: Sale[] = [
      {
        id: 1,
        name: 'sale 1',
        saleDate: '2021-09-01',
        totalCost: 100,
      },
      {
        id: 2,
        name: 'sale 2',
        saleDate: '2021-09-02',
        totalCost: 200,
      },
      {
        id: 3,
        name: 'sale 3',
        saleDate: '2021-09-03',
        totalCost: 300,
      }
    ];

    if (!localStorage.getItem('sales')) {
      localStorage.setItem('sales', JSON.stringify(initialSales));
    }
    this.resetSaleToAdd();
  }

  ngOnDestroy(): void {
    localStorage.setItem('sales', JSON.stringify(this.sales));
  }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('products') || '{}');
    this.getAllSales();
  }


  updateSale() {



    this.visibleEditForm = false;
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `Sale ${this.saleToEdit.name} updated successfully!`
    });

  }

  // onEditSale(sale: Sale) {
  //   this.saleToAdd = sale;
  //   this.saleToEdit = {...sale};
  //   this.visibleEditForm = true;
  // }

  deleteSale(id: number) {
    this.sales = this.sales.filter((sale: Sale) => sale.id !== id);
  }

  addSale() {
    this.sales.push(this.saleToAddToSaleAssembler(this.saleToAdd));
    this.visibleAddForm = false;
  }

  resetSaleToAdd() {
     this.saleToAdd = {
      productId: 0,
      quantity: 0,
      };
  }

  private getAllSales() {
    this.sales = JSON.parse(localStorage.getItem('sales') || '{}');
  }

  private saleToAddToSaleAssembler(saleToAdd: { productId: number, quantity:number }): Sale {

    const product = this.products.find((product: Product) => product.id === saleToAdd.productId);

    //restar la cantidad del producto del local storage
    product!.stock = product!.stock - saleToAdd.quantity;
    localStorage.setItem('products', JSON.stringify(this.products));

    return {
      id: this.sales[this.sales.length - 1].id + 1,
      name: 'sale ' + (this.sales.length + 1),
      saleDate: new Date().toISOString().slice(0, 10),
      //el total cost es la multiplicacion del precio unitario por la cantidad
      totalCost: product!.realPrice * saleToAdd.quantity,
    };
  }

}
