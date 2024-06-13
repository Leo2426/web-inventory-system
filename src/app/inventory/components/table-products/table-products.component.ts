import {Component, contentChild, input, OnDestroy, OnInit, viewChild} from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {RippleModule} from "primeng/ripple";
import {MessageService} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {ChipsModule} from "primeng/chips";
import {Product} from "../../model/product";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-table-products',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    ToastModule,
    RippleModule,
    DialogModule,
    ChipsModule,
    FormsModule
  ],
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.css'
})
export class TableProductsComponent implements OnInit, OnDestroy{
  products: Product[] = [];

  visibleEditForm: boolean = false;
  visibleAddForm: boolean = false;
  selectedProduct: Product = {} as Product;
  productToAdd: Product = {} as Product;
  productToEdit: Product = {} as Product;
  ngOnInit() {
    this.getAllProducts();
  }


  constructor( private messageService: MessageService) {
   //si products en el local storage es null, entonces setear products
    const initialProducts = [
      {
        id: 1,
        name: 'product 1',
        unitPrice: 100,
        realPrice: 120,
        discount: 0,
        stock: 100,
        userId: 1,
      },
      {
        id: 2,
        name: 'product 2',
        unitPrice: 200,
        realPrice: 240,
        discount: 0,
        stock: 200,
        userId: 1,
      },
      {
        id: 3,
        name: 'product 3',
        unitPrice: 300,
        realPrice: 350,
        discount: 0,
        stock: 300,
        userId: 1,
      },

    ]

    if (localStorage.getItem('products') === null) {
      localStorage.setItem('products', JSON.stringify(initialProducts));
    }


    this.resetProductToAdd()
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((product: Product) => product.id !== id);
  }

  updateProduct() {
    this.products = this.products.map((product: Product) => {
      if (product.id === this.productToEdit.id) {
        return this.productToEdit;
      }
      return product;
    });

    this.visibleEditForm = false;
  }

  addProduct() {
    //aumentar el id en 1
    this.productToAdd.id = this.products[this.products.length - 1].id + 1;
    this.products.push({...this.productToAdd});

    //resetear el productToAdd
    this.resetProductToAdd()

    this.visibleAddForm = false;
  }


  private getAllProducts() {
    this.products = JSON.parse(localStorage.getItem('products') || '{}');
  }

  onEditProduct(product: Product) {
    this.selectedProduct = product;
    this.productToEdit = {...product};
    this.visibleEditForm = true;
  }

  resetProductToAdd() {
    this.productToAdd = {
      id: 0,
      name: '',
      unitPrice: 0,
      realPrice: 0,
      discount: 0,
      stock: 0,
      userId: 1,
    };
  }

  ngOnDestroy() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

}
