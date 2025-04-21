import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button 
    class="bg-sky-500 hover:bg-sky-700 text-white px-3 rounded-md  cursor-pointer"
     (click)="onClickButton.emit();">
      {{label()}}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input<string>('');

  onClickButton = output();

}
