import { Component, signal } from '@angular/core';
import { ProductCartComponent } from "./product-cart/product-cart.component";

@Component({
  selector: 'app-products',
  imports: [ProductCartComponent],
  template: `
    <div class="grid grid-cols-4 gap-4 p-4">
      
    @for (product of products(); track product.id){
      
     <app-product-cart [p]="product" />
      
    }
    </div>
  `,
  styles: ``
})
export class ProductsComponent {

  products = signal([{
    "id": 1,
    "title": "Fjallraven - Foldsack.",
    "price": 109.95,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "stock": 0
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim",
    "price": 22.3,
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "stock": 24
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "stock": 0
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "stock": 6
  }])

}
