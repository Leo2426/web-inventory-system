import { Component } from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-table-products',
  standalone: true,
  imports: [
    SharedModule,
    TableModule,
    ButtonModule,
    RippleModule
  ],
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.css'
})
export class TableProductsComponent {
  products: {}[] = [
    {
      id: '1',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '2',
      code: 'f230fh0g3',
      name: 'T-shirt',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }
  ]

  selectProduct(product: any) {
    alert(product.name)
  }
}
