import { Component, input, signal } from '@angular/core';
import { Product } from '../../../models/product.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-product-cart',
  imports: [PrimaryButtonComponent],
  template: `<div class="bg-white shadow-md rounded-xl p-4 flex flex-col relative">
    <div class="mx-auto">
      <img [src]="p().image" alt="Product Image" class="w-32 h-32 object-contain" />
      <br/>
      <div class="flex flex-col mt-2">

        <h2 class="text-md font-bold">{{ p().title }}</h2>
        <p class="text-sm">{{ '$'+ p().price }}</p>
        <app-primary-button class="mt-3" [label]="addtocart()" (onClickButton)="onAddToCart()"  />
      </div>
      <span>
       

          <span class="absolute top-1 right-1 px-2 py-1 text-xs font-bold" [class] = "p().stock == 0 ? 'text-red-500' : 'text-green-500'">
          @if(p().stock == 0){
           out of stock
          }@else {
            {{p().stock }} left
          }
          </span>
        
      </span>
    </div>
    </div>
  `,
  styles: ``
})
export class ProductCartComponent {
  addtocart = signal("Add to Cart");
  p = input.required<Product>();

  onAddToCart() {

    console.log("Added to cart" + this.p().id);
  }
}
