import { Component } from '@angular/core';
import {TableCustomersComponent} from "../../components/table-customers/table-customers.component";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    TableCustomersComponent
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

}
