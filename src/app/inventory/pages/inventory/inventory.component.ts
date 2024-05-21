import { Component } from '@angular/core';
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    TableModule
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

}
