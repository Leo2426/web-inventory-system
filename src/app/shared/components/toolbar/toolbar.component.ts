import {Component, OnInit} from '@angular/core';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {ChipsModule} from "primeng/chips";
import {SplitButtonModule} from "primeng/splitbutton";
import {MenuItem} from "primeng/api";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    ChipsModule,
    SplitButtonModule,
    NgOptimizedImage
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit{
  items: MenuItem[] | undefined;
  userName: string = '';

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      }
    ];

    //obtener el user como objeto
    const user = localStorage.getItem('user');
    this.userName = user ? JSON.parse(user).name : '';
  }
}
