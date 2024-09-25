import { Injectable } from '@angular/core';

import { IProduct } from '../product/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: IProduct[] = [];

  constructor() {}

  addToCart(product: IProduct): void {
    this.cartItems.push(product);
  }

  removeFromCart(product: IProduct): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
  }

  calculateTotalPrice(): number {
    let totalPrice: number = 0;

    this.cartItems.forEach((item) => {
      totalPrice += item.price;
    });

    return totalPrice;
  }

  getCartItems(): IProduct[] {
    return this.cartItems;
  }
}
