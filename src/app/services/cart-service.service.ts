import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cart = signal<Product[]>([]);

  addToCart(product: Product) {

      // add new product to cart
      if(this.cart().some(item => item.id === product.id)) {
        alert("Already added in cart");
      }else{
        this.cart.set([
          ...this.cart(),
          product]);
        console.log(this.cart());
      }
  
  }

  removeFromCart(product: Product) {
    // remove product from cart
    this.cart.set(this.cart().filter(item => item.id !== product.id));
  }
}
