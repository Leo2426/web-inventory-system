export class Product {
  id: number
  name: string
  unitPrice: number
  realPrice: number
  discount?: number
  stock: number
  currentStock:  number
  userId: number

  constructor( discount:number, id: number, name: string, unitPrice: number, realPrice: number, stock: number, currentStock: number, userId: number) {
    this.id = id
    this.discount = discount
    this.name = name
    this.unitPrice = unitPrice
    this.realPrice = realPrice
    this.stock = stock
    this.currentStock = currentStock
    this.userId = userId
  }
}
