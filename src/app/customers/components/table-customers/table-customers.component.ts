import {Component, OnInit} from '@angular/core';
import {CustomersService} from "../../services/customers.service";
import {Customer} from "../../model/customer";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {MessageService, SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-table-customers',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    SharedModule,
    TableModule,
    ToastModule
  ],
  templateUrl: './table-customers.component.html',
  styleUrl: './table-customers.component.css'
})
export class TableCustomersComponent implements OnInit{
    customers: Customer[] = [];
    visibleAddForm: boolean = false;
    visibleEditForm: boolean = false;
    selectedCustomer: Customer = {} as Customer;
    customerToAdd: Customer;
    customerToEdit: Customer = {} as Customer;
    ngOnInit(): void {
        this.getAllCustomers();
    }

    constructor(private customersService: CustomersService, private messageService: MessageService) {
        this.customerToAdd = {
            name: '',
            lastName: '',
            birthday: '',
            email: '',
            phone: ''
        };
    }

    getAllCustomers() {
        this.customersService.getAll().subscribe((response: any) => {
            this.customers = response;
        });
    }


  onEditCustomer(customer: Customer) {
    this.selectedCustomer = customer;
    this.customerToEdit= {...customer};
    this.visibleEditForm = true;
  }

  updateCustomer() {
    this.customersService.update(this.customerToEdit.id, this.customerToEdit).subscribe((response: any) => {
      this.customers = this.customers.map((customer) => {
        if (customer.id === response.id) {
          customer = response;
        }
        return customer;

      });
      console.log(response);
    });
    this.visibleEditForm = false;
  }

  addCustomer() {
    this.customersService.create(this.customerToAdd).subscribe((response: any) => {
      this.customers.push({...response})
      this.messageService.add({severity: 'success', summary: 'Success', detail: `Customer ${this.customerToAdd.name} added successfully!` });
    });
    this.visibleAddForm = false;
  }

  deleteCustomer(id: number) {
    this.customersService.delete(id).subscribe(() => {
      this.getAllCustomers();
    });
  }

}
