import { Component, computed, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartServiceService } from '../../services/cart-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent,RouterLink],
  template: `
  <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between">
  <span routerLink="/" class="cursor-pointer">Ecommerce Store</span>
  <app-primary-button label="{{ cartLabel() }}" routerLink = "/cart"/>
  </div>
  `,
  styles: `
    .header{
      background-color: rgba(0, 0, 0, 0.8);
      color:white;
      padding: 1rem;
    }
  `
})
export class HeaderComponent {


  // cartService
  cartService = inject(CartServiceService);
  cartLabel = computed(() => `Cart (${this.cartService.cart().length})`);

}
