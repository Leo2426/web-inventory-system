import { Component } from '@angular/core';
import {SidebarComponent} from "../../../shared/components/sidebar/sidebar.component";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    ButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
