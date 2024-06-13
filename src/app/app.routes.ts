import { Routes } from '@angular/router';
import { InventoryComponent } from './inventory/pages/inventory/inventory.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { SalesComponent } from './sales/pages/sales/sales.component';
import { CustomersComponent } from './customers/pages/customers/customers.component';
import { SignInComponent } from './public/pages/sign-in/sign-in.component';
import { SignUpComponent } from './public/pages/sign-up/sign-up.component';
import { signInGuard } from './auth/guards/signInGuard';
import {PublicComponent} from "./public/pages/public/public.component";
import {AuthenticatedComponent} from "./shared/pages/authenticated/authenticated.component";
import {HomeComponent} from "./shared/components/home/home.component";


export const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    ]
  },
  {
    path: '', component: AuthenticatedComponent, canActivate: [signInGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'customers', component: CustomersComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];
