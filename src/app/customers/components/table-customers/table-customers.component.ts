import {Component, OnDestroy, OnInit} from '@angular/core';
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
export class TableCustomersComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  visibleAddForm: boolean = false;
  visibleEditForm: boolean = false;
  selectedCustomer: Customer = {} as Customer;
  customerToAdd: Customer;
  customerToEdit: Customer = {} as Customer;

  ngOnInit(): void {
    this.getAllCustomers();
  }

  constructor(private messageService: MessageService) {
    this.customerToAdd = {
      name: '',
      lastName: '',
      birthday: '',
      email: '',
      phone: ''
    };

    const initialCustomers: Customer[] = [
      {
        id: 1,
        name: 'Gerardo',
        lastName: 'Martinez',
        birthday: '2021-09-01',
        email: 'gerardo@gmail.com',
        phone: '909292873'
      },
      {
        id: 2,
        name: 'Maria',
        lastName: 'Gonzalez',
        birthday: '2021-09-02',
        email: 'maria@gmail.com',
        phone: '9920187272'
      }
    ];

    //verificar si customers en el local storage es null, entonces setear customers
    if (!localStorage.getItem('customers')) {
      localStorage.setItem('customers', JSON.stringify(initialCustomers));
    }

    this.getAllCustomers();

  }

  ngOnDestroy(): void {
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }

  getAllCustomers() {
    this.customers = JSON.parse(localStorage.getItem('customers') || '[]');
  }


  onEditCustomer(customer: Customer) {
    this.selectedCustomer = customer;
    this.customerToEdit = {...customer};
    this.visibleEditForm = true;
  }

  updateCustomer() {
    //actualizar el customer
    this.customers = this.customers.map((customer: Customer) => {
      if (customer.id === this.customerToEdit.id) {
        return this.customerToEdit;
      }
      return customer;
    });

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `Customer ${this.customerToEdit.name} updated successfully!`
    });

    this.visibleEditForm = false;
  }

  addCustomer() {
    //agregar el customer al array de customers\
    this.customerToAdd.id = this.customers.length + 1;
    this.customers.push(this.customerToAdd);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `Customer ${this.customerToAdd.name} added successfully!`
    });

    this.visibleAddForm = false;
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter((customer: Customer) => customer.id !== id);
  }

}
