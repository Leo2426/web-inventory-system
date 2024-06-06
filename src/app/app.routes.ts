import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {InventoryComponent} from "./inventory/pages/inventory/inventory.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {SalesComponent} from "./sales/pages/sales/sales.component";
import {CustomersComponent} from "./customers/pages/customers/customers.component";
import {SignInComponent} from "./public/pages/sign-in/sign-in.component";


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  {path: 'inventory', component: InventoryComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'customers', component: CustomersComponent},
  {path: '**', component: PageNotFoundComponent}
];
