import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IProduct } from '../../services/product/product.model';
import { ProductService } from '../../services/product/product.service';
import { CartModalComponent } from '../modals/cart-modal/cart-modal.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CartModalComponent,
    ProductListComponent,
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent {
  products: IProduct[] = [];
  productId: string = '';
  errorMessage: string = '';

  isCartOpen: boolean = false;

  sortOption: string = 'name';
  searchTerm: string = '';
  filteredProducts: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = products;
      },
      error: (err) => {
        this.errorMessage = err.message;
      },
      complete: () => {
        this.sortProducts();
      },
    });
  }

  openCart(): void {
    this.isCartOpen = true;
  }

  closeCart(): void {
    this.isCartOpen = false;
  }

  sortProducts(): void {
    this.filteredProducts.sort((a, b) => {
      if (this.sortOption === 'name') {
        return a.title.localeCompare(b.title);
      } else if (this.sortOption === 'price') {
        return a.price - b.price;
      }
      return 0;
    });
  }

  searchProducts(): void {
    this.filteredProducts = this.products.filter((product) =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
