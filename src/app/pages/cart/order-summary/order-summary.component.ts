import { Component, computed, inject } from '@angular/core';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartServiceService } from '../../../services/cart-service.service';

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
  @if(total() != 0){

    <div class="bg-white-100 p-6 rounded-xl shadow-xl">
     <h2 class="text-2xl">Order Summary</h2>
     <br/>
     <div class="flex flex-col gap-4">
       <div class="flex gap-4">
         <span class="text-lg">Total Price: </span>
         <span class="text-lg font-bold ">{{ '$ ' + total() }}</span>
       </div>
       <app-primary-button label="Proceed to checkout" />
     </div>
   </div>
  }
  `,
  styles: ``
})
export class OrderSummaryComponent {

  cartService = inject(CartServiceService);


  total = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
      total += item.price;
    }

    return total;
  });

}
