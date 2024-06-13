import { Component } from '@angular/core';
import {ToolbarComponent} from "../../components/toolbar/toolbar.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-authenticated',
  standalone: true,
  imports: [
    ToolbarComponent,
    SidebarComponent,
    RouterOutlet,
    NgIf
  ],
  templateUrl: './authenticated.component.html',
  styleUrl: './authenticated.component.css'
})
export class AuthenticatedComponent {
  authenticated: boolean = false;

//   leer del local storage la propiedad authenticated
  constructor() {
    this.authenticated = localStorage.getItem('authenticated') === 'true';
  }
}
