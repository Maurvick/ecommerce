import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CartService } from '../../services/cart/cart.service';
import { IProduct } from '../../services/product/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input() products: IProduct[] = [];

  productId: string = '';

  constructor(
    private cart: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['id'];
    });
  }

  addToCart(product: IProduct): void {
    this.cart.addToCart(product);
  }

  getCartItems(): IProduct[] {
    return this.cart.getCartItems();
  }

  showItemDetails(id: number): void {
    this.router.navigate(['/product/id', id]);
  }

  isProductInCart(product: IProduct): boolean {
    return this.getCartItems().includes(product);
  }
}
