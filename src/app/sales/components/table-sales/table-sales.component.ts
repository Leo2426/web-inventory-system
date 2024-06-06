import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {MessageService, SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {Sale} from "../../model/sale";
import {SalesService} from "../../services/sales.service";
import {ToastModule} from "primeng/toast";
import {Product} from "../../../inventory/model/product";
import {ProductsService} from "../../../inventory/services/products.service";
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
export class TableSalesComponent implements OnInit {
  visibleEditForm: boolean = false;
  visibleAddForm: boolean = false;
  sales: Sale[] = [];
  selectedSale: Sale = {} as Sale;
  saleToEdit: Sale = {} as Sale;
  saleToAdd:{
    productId: number,
    quantity: number
  }[] = [] ;
  products: Product[] = [];

  constructor(private productService: ProductsService, private saleService: SalesService, private messageService: MessageService) {
    this.saleToAdd = [
      {
        "productId": 1,
        "quantity": 1,
      }
    ];
  }

  ngOnInit() {
    this.saleService.getAll().subscribe((response: any) => {
      this.sales = response;
    })

    this.productService.getAll().subscribe((response: any) => {
      this.products = response;
    })
  }


  updateSale() {
    this.saleService.update(this.saleToEdit.id, this.saleToEdit).subscribe((response: any) => {
      this.sales = this.sales.map((sale) => {
        if (sale.name === response.name) {
          sale = response;
        }
        return sale;
      });
      this.visibleEditForm = false;
      this.messageService.add({severity: 'success', summary: 'Success', detail: `Sale ${this.saleToEdit.name} updated successfully!` });
    });
  }

  // onEditSale(sale: Sale) {
  //   this.saleToAdd = sale;
  //   this.saleToEdit = {...sale};
  //   this.visibleEditForm = true;
  // }

  deleteSale(name: string) {
    this.saleService.delete(name).subscribe(() => {
      this.sales = this.sales.filter((sale) => sale.name !== name);
    });
  }

  addSale() {
    this.saleService.create(this.saleToAdd).subscribe((response: any) => {
      this.sales.push(response);
      this.messageService.add({severity: 'success', summary: 'Success', detail: `Sale ${this.saleToAdd} added successfully!` });
    })

    this.visibleAddForm = false;
  }
}
