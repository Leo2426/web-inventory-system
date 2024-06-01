import { Injectable } from '@angular/core';
import {Customer} from "../model/customer";
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends BaseService<Customer>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/customers';
  }
}
