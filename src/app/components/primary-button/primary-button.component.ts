import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button (click)="onClickButton.emit();">
      {{label()}}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input('');

  onClickButton = output();

}
