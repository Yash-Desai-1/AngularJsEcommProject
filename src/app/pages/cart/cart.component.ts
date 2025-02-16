import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent,OrderSummaryComponent],
  template: `
   <div class="p-6 flex flex-col gap-4">
    <h3 class="text-2xl">Shopping Cart</h3>
      
    @for(product of cartService.cart(); track product.id){
      <!-- <app-cart-item [cartItem]="product"/> -->
      <app-cart-item [cartitem]="product"/>
    }
    <app-order-summary/>
    
   </div>
  `,
  styles: ``
})
export class CartComponent {
       cartService= inject(CartService);
}
