import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
  <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between">
  <span>My Store</span>
  <app-primary-button [label] ="cart()" (onClickButton)="onClickhandler()" />
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

  cart = signal("Cart");
  onClickhandler(){
    console.log("Clicked");
  }
}
