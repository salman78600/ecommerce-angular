import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CartServiceService } from '../../../services/cart-service.service';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
   <div
      class="bg-white shadow-md rounded-xl p-6 flex gap-4 items-center"
    >
      <img [src]="cartItem().image" class="w-[50px] h-[50px] object-contain" />
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ cartItem().title }}</span>
        <span class="text-sm"> {{ '$' + cartItem().price }}</span>
      </div>
      <div class="flex-1"></div>
      <app-button label="Remove" (onClickButton)="cartService.removeFromCart(cartItem());"/>
    </div>
  `,
  styles: ``
})
export class CartItemComponent {

  cartService = inject(CartServiceService);

  cartItem = input.required<Product>(); // cart item object

}
