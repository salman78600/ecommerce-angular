import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cart = signal<Product[]>([]);

  addToCart(product: Product) {

      // add new product to cart
      this.cart.set([
        ...this.cart(),
        product]);
      console.log(this.cart());
  
  }
}
