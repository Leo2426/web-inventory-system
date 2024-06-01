import { Component } from '@angular/core';
import {TableSalesComponent} from "../../components/table-sales/table-sales.component";

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    TableSalesComponent
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

}
