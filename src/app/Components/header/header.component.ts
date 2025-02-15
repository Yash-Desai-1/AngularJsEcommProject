import { Component, inject, input, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="bg-slate-100 px-4 shadow-md py-3 flex justify-between items-center">
      <button class="text-xl" routerLink="/">My Store</button>
      <app-primary-button 
       routerLink="/cart"
       [label]="'Cart (' + cartService.cart().length + ')'" />
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
  // dynamic value for input button
   buttonName: string="Add to Cart";
   cart =signal("Cart");
  // output event
//   showButtonClicked() {
//     console.log('button was clicked');
// }

  cartService=inject(CartService);

}
