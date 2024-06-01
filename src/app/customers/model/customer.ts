export class Customer {
  id?: number;
  name: string;
  lastName: string;
  birthday: string;
  email: string;
  phone: string;

  constructor(id: number, name: string, lastName: string, birthday: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.birthday = birthday;
    this.email = email;
    this.phone = phone;
  }

}
