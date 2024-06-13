import {Component, OnInit} from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {ButtonModule} from "primeng/button";
import {SalesService} from "../../../sales/services/sales.service";
import {Sale} from "../../../sales/model/sale";
import {CardModule} from "primeng/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    ButtonModule,
    CardModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  totalSales: number = 0;
  constructor() {
  }

  ngOnInit() {
    this.getTotalSales();
  }

  private getTotalSales() {
    //obtener todas las ventas del local storage y sumar el totalCost
    const sales: Sale[] = JSON.parse(localStorage.getItem('sales') || '[]');
    this.totalSales = sales.map((s: Sale) => s.totalCost).reduce((a, b) => a + b, 0);
  }
}
