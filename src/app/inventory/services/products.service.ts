import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<Product> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/products';
  }
}
