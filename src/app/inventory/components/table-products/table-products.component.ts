import {Component, contentChild, input, OnInit, viewChild} from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {RippleModule} from "primeng/ripple";
import {MessageService} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {ChipsModule} from "primeng/chips";
import {Product} from "../../model/product";
import {FormsModule} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
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
export class TableProductsComponent implements OnInit{
  products: Product[] = [];
  visibleEditForm: boolean = false;
  visibleAddForm: boolean = false;
  selectedProduct: Product = {} as Product;
  productToAdd: Product;
  productToEdit: Product = {} as Product;
  ngOnInit() {
    this.getAllProducts();
  }


  constructor(private productService: ProductsService ,  private messageService: MessageService) {
    this.productToAdd = {
      name: '',
      unitPrice: 0,
      realPrice: 0,
      stock: 0,
      currentStock: 0,
      userId: 1,
    };
  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }

  updateProduct() {
    this.productService.update(this.productToEdit.id, this.productToEdit).subscribe((response: any) => {
       this.products = this.products.map((product) => {
        if (product.id === response.id) {
          product = response;
        }
        return product;

      });
        console.log(response);
    });

    this.visibleEditForm = false;
  }

  addProduct() {
    this.productService.create(this.productToAdd).subscribe((response: any) => {
      console.log(response);
      this.products.push(response);
    });
    this.visibleAddForm = false;
  }


  private getAllProducts() {
    this.productService.getAll().subscribe((response: any) => {
      this.products = response;
    });
  }

  onEditProduct(product: Product) {
    this.selectedProduct = product;
    this.productToEdit = {...product};
    this.visibleEditForm = true;
  }

}
