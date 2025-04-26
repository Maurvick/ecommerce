import { Injectable } from '@angular/core';

import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];

  constructor() {}

  addToCart(product: Product): void {
    this.cartItems.push(product);
  }

  removeFromCart(product: Product): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
  }

  calculateTotalPrice(): number {
    let totalPrice: number = 0;

    this.cartItems.forEach((item) => {
      totalPrice += item.price;
    });

    return totalPrice;
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }
}
