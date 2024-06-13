import {Component, OnInit} from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {ButtonModule} from "primeng/button";
import {Sale} from "../../../sales/model/sale";
import {CardModule} from "primeng/card";
import {RouterLink} from "@angular/router";
import {Product} from "../../../inventory/model/product";
import {Customer} from "../../../customers/model/customer";
import {ChartModule} from "primeng/chart";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    ButtonModule,
    CardModule,
    RouterLink,
    ChartModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  totalSales: number = 0;
  totalProducts: number = 0;
  totalCustomers: number = 0;
  data: any;
  options: any;
  constructor() {
  }

  ngOnInit() {
    this.loadChart();
    this.getTotalSales();
    this.getTotalProducts();
    this.getTotalCustomers();
  }

  private getTotalSales() {
    //obtener todas las ventas del local storage y sumar el totalCost
    const sales: Sale[] = JSON.parse(localStorage.getItem('sales') || '[]');
    this.totalSales = sales.map((s: Sale) => s.totalCost).reduce((a, b) => a + b, 0);
  }

  private getTotalProducts() {
    //obtener todos los productos del local storage y contarlos
    const products: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
    this.totalProducts = products.length;
  }

  private getTotalCustomers() {
    //obtener todos los clientes del local storage y contarlos
    const customers: Customer[] = JSON.parse(localStorage.getItem('customers') || '[]');
    this.totalCustomers = customers.length;
  }

  private loadChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    //la data y las opciones del chart son los productos del local storage
    //aplicar el color de texto del theme multicolor
    const products: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
    this.data = {
      labels: products.map((p: Product) => p.name),
      datasets: [
        {
          label: 'Stock',
          data: products.map((p: Product) => p.stock),
          fill: false,
          //colores de fondo aleatorios
          backgroundColor: products.map((p: Product) => {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
          }),
          borderColor: textColor,
        }
      ]
    };

  }

}
