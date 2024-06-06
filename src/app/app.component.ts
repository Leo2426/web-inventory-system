import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarModule} from "primeng/sidebar";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import {ToolbarComponent} from "./shared/components/toolbar/toolbar.component";
import {SignInComponent} from "./public/pages/sign-in/sign-in.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarModule, SidebarComponent, ToolbarComponent, SignInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'easy-inventory-front';
  authenticated: boolean = false;

//   leer del local storage la propiedad authenticated
  constructor() {
    this.authenticated = localStorage.getItem('authenticated') === 'true';
  }

}
