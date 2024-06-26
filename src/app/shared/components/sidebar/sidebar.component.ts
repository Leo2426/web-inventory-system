import {Component, OnInit} from '@angular/core';
import {MenuItem, SharedModule} from "primeng/api";
import {MenuModule} from "primeng/menu";
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
      { label: 'Customers', icon: 'pi pi-users', route: '/customers' },
      { style: {'margin-top': '2rem'}, label: 'Log Out', icon: 'pi pi-sign-out', command: () => this.logout()},
    ];
  }

  logout() {
    localStorage.setItem('authenticated', 'false');
    location.href = '/sign-in';
  }

}
