import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {InventoryComponent} from "./inventory/pages/inventory/inventory.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {SalesComponent} from "./sales/pages/sales/sales.component";


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'inventory', component: InventoryComponent},
  {path: 'sales', component: SalesComponent},
  {path: '**', component: PageNotFoundComponent}

];
