import { Component, inject } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
    <div class="p-4"> 
      <h2>My Shopping Cart</h2>
      @if (cartSevrvice.cart().length ==0){
        <p class="text-sm text-center ">Your cart is empty!</p>
      }@else {

        @for (item of cartSevrvice.cart(); track item.id) {
          <app-cart-item [cartItem]="item"/>
        }
      }
      
    </div>
    <app-order-summary />
  `,
  styles: ``
})
export class CartComponent {

  cartSevrvice = inject(CartServiceService);

}
