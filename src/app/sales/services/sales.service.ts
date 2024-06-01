import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Sale} from "../model/sale";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SalesService extends BaseService<Sale>{
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/sales';
  }


}
