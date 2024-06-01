import {Component, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product";
import {TableProductsComponent} from "../../components/table-products/table-products.component";

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    TableModule,
    TableProductsComponent,
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent{
}
