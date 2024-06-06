import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {ToastModule} from "primeng/toast";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterLink,
    ToastModule,
    FormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  userName: String;
  lastName: String;
  password: String;
  email: String;

  constructor(private authService: AuthService) {
    this.userName = '';
    this.lastName = '';
    this.password = '';
    this.email = '';
  }

  signUp() {
    console.log('User Name: ' + this.userName);
    console.log('Last Name: ' + this.lastName);
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);

    this.authService.create({
      name: this.userName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }).subscribe((response: any) => {
      alert('User created successfully');
      location.href = '/sign-in';
    });

  }

}
