import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {User} from "../../../auth/model/user";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CardModule,
    FormsModule,
    ChipsModule,
    ButtonModule,
    ToastModule,
    RouterLink
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  userName: String;
  password: String;
  users: User[] = [
    { name: 'admin', lastName: 'adminLastName', password: '123', email: 'admin@gmail.com'},
  ];


  constructor( private messageService: MessageService) {
    //setear authenticated a false
    localStorage.setItem('authenticated', 'false');

    // //recargar la pagina solo 1 vez
    // if (localStorage.getItem('reloaded') === 'true') {
    //   localStorage.setItem('reloaded', 'false');
    //   location.reload();
    // } else {
    //   localStorage.setItem('reloaded', 'true');
    // }

    this.userName = 'admin';
    this.password = '123';

    // this.authService.getAll().subscribe((response: any) => {
    //   this.users = response;
    // })

  }

  login() {
    console.log('User Name: ' + this.userName);
    console.log('Password: ' + this.password);

    const user = this.users.find((u: User) => u.name === this.userName && u.password === this.password);
    if(user) {
      console.log('User found: ' + user.name);
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('user', JSON.stringify(user));
      location.href = '/home';


    } else {
      console.log('User not found');
      this.messageService.add({severity:'error', summary:'Error', detail:'User not found'});
    }
  }


}
