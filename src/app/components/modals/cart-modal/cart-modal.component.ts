import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CartService } from '../../../services/cart/cart.service';
import { IProduct } from '../../../services/product/product.model';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css',
})
export class CartModalComponent {
  cartItems: IProduct[] = [];

  @Output() close: EventEmitter<void> = new EventEmitter();

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.cartItems;
  }

  closeCart() {
    this.close.emit();
  }

  calculateTotalPrice(): number {
    return Math.round(this.cartService.calculateTotalPrice() * 100) / 100;
  }
}
