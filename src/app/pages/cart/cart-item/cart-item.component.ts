import { Component, input ,inject} from '@angular/core';
import { Product } from '../../../models/product.model';
import { ButtonComponent } from "../../../Components/button/button.component";
import { CartService } from '../../../services/cart.service';
import { OrderSummaryComponent } from "../order-summary/order-summary.component";

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent, OrderSummaryComponent],
  template: `
  <div class="bg-white shadow-md border rounded-xl p-6 flex gap-4 item-center">
    <img [src]="cartitem().image" class="w-[50px] h-[50px] object-contain"/>
    <div class="flex flex-col flex-1">
      <span class="text-md font-bold">{{cartitem().title }}</span>
      <span class="text-sm">{{'$'+ cartitem().price}}</span>
    </div>
      <div class="flex-2">
        <app-button label="Remove" (handleButtonClick)="cartservice.removeFromCart(cartitem().id)" />
      </div>
  </div>
  `,
  styles: ``
})
export class CartItemComponent {
  cartservice= inject(CartService);
    cartitem = input.required<Product>();
}
