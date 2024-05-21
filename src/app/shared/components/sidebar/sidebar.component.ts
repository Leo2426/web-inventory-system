import {Component, OnInit} from '@angular/core';
import {MenuItem, SharedModule} from "primeng/api";
import {MenuModule} from "primeng/menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MenuModule,
    SharedModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', route: '/home' },
      { label: 'Inventory', icon: 'pi pi-box', route: '/inventory' },
      { label: 'Sales', icon: 'pi pi-shopping-cart', route: '/sales' },
      { label: 'Customers', icon: 'pi pi-users', route: '/customers' }
    ];
  }
}
