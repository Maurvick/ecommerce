import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IProduct } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(limit: number = 10) {
    let params = {
      limit: limit,
    };
    return this.httpClient.get<IProduct[]>(
      'https://fakestoreapi.com/products/',
      { params }
    );
  }

  getAllProducts() {
    return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products');
  }
}
