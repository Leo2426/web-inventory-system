import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {Sale} from "../../model/sale";
import {SalesService} from "../../services/sales.service";

@Component({
  selector: 'app-table-sales',
  standalone: true,
    imports: [
        ButtonModule,
        DialogModule,
        InputTextModule,
        PaginatorModule,
        SharedModule,
        TableModule
    ],
  templateUrl: './table-sales.component.html',
  styleUrl: './table-sales.component.css'
})
export class TableSalesComponent implements OnInit{
  visibleEditForm: boolean = false;
  visibleAddForm: boolean = false;
  sales: Sale[] = [];

  constructor(private saleService: SalesService) {
  }
  ngOnInit() {
    this.saleService.getAll().subscribe((response: any) => {
      this.sales = response;
    })
  }


  onEditSale(sale: Sale) {

  }

  deleteSaale(id: number) {

  }
}
