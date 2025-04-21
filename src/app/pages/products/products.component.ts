import { Component, inject, signal } from '@angular/core';
import { ProductCartComponent } from "./product-cart/product-cart.component";
import { Product } from '../../models/product.model';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-products',
  imports: [ProductCartComponent],
  template: `

    @if (products().length == 0) {
      <p class="p-2 text-center">Loading..</p>
    }@else {

      <div class="grid grid-cols-4 gap-4 p-4">
        
      @for (product of products(); track product.id){
        
       <app-product-cart [p]="product" />
        
      }
      </div>
    }
  `,
  styles: ``
})
export class ProductsComponent {

  apiService = inject(ApiServiceService);
  products = signal<Product[]>([]);

  ngOnInit() {
    this.apiService.getProducts().subscribe((data) => {
      this.products.set(data);
    });
  }


}
