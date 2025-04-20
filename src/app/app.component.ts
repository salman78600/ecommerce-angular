import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from "./pages/products/products.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductsComponent],
  template: `
    <app-header />
    <app-products/>
  `,
  styles: [],
})
export class AppComponent {
}
