import { Component, input, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 px-4 shadow-md py-3 flex justify-between items-center">
      <span class="text-xl">My Store</span>
      <app-primary-button [label]="cart()" (btnClicked)="showButtonClicked()"/>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
  // dynamic value for input button
   buttonName: string="Add to Cart";
   cart =signal("Cart");
  // output event
  showButtonClicked() {
    console.log('button was clicked');
}


}
