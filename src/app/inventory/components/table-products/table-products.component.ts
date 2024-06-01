import {Component, input, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {RippleModule} from "primeng/ripple";
import {MessageService} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {ChipsModule} from "primeng/chips";
import {Product} from "../../model/product";
@Component({
  selector: 'app-table-products',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    ToastModule,
    RippleModule,
    DialogModule,
    ChipsModule
  ],
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.css'
})
export class TableProductsComponent implements OnInit{
  products = input.required<Product[]>()


  visibleEditForm: boolean = false;
  visibleAddForm: boolean = false;
  selectedProduct: any = {}
  ngOnInit() {
  }


  constructor(private messageService: MessageService) {
  }


  editProduct(product: any) {
    this.visibleEditForm = true;
    this.selectedProduct = product
  }

  deleteProduct(product: any) {

  }
}
