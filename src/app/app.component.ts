import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarModule} from "primeng/sidebar";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, SidebarModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'easy-inventory-front';
}
