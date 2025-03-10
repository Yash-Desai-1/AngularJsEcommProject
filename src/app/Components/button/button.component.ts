import { Component,EventEmitter,input,output,Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class="text-black w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90" (click)="handleButtonClick.emit()">
          {{
            label()
          }}
  </button>
  `,
  styles: ``
})
export class ButtonComponent {
label=input('');

 handleButtonClick= output();

}
