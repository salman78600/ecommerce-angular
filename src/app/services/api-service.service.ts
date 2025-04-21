import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  http  = inject(HttpClient);

  getProducts() {
    return this.http.get<Array<Product>>('https://fakestoreapi.com/products');
  }
}
