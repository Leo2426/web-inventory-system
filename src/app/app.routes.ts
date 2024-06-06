import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {InventoryComponent} from "./inventory/pages/inventory/inventory.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {SalesComponent} from "./sales/pages/sales/sales.component";
import {CustomersComponent} from "./customers/pages/customers/customers.component";
import {SignInComponent} from "./public/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./public/pages/sign-up/sign-up.component";
import {signInGuard} from "./auth/guards/signInGuard";


export const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [signInGuard]},
  {path: 'sign-in', component: SignInComponent},
  {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'inventory', component: InventoryComponent, canActivate: [signInGuard]},
  {path: 'sales', component: SalesComponent, canActivate: [signInGuard]},
  {path: 'customers', component: CustomersComponent, canActivate: [signInGuard]},
  {path: '**', component: PageNotFoundComponent}
];
