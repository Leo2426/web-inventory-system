export class Sale {
  id: number;
  name: string;
  saleDate: string;
  totalCost: number;
  constructor(id: number, name: string, saleDate: string, totalCost: number) {
    this.id = id;
    this.name = name;
    this.saleDate = saleDate;
    this.totalCost = totalCost;
  }
}
