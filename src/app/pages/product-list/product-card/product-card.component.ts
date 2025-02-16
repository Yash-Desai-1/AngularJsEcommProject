import { Component ,inject,input} from '@angular/core';
import { Product } from '../../../models/product.model';
import { PrimaryButtonComponent } from "../../../Components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
   <div
      class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative"
    >
      <div class="mx-auto">
        <img
          [src]="productOfProductCard().image"
          class="w-[200px] h-[100px] object-contain"
        />
      </div>
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ productOfProductCard().title }}</span>
        <span class="text-sm"> {{ '$' + productOfProductCard().price }}</span>
        <app-primary-button
          
          class="mt-3"
          label="Add to Cart"
          (btnClicked)="cartService.addToCart(productOfProductCard())" 
          
        />
      </div>

      <!-- <span
        class="absolute top-2 right-3 text-sm font-bold"
        [class]="productOfProductCard().stock ? 'text-green-500' : 'text-red-500'"
      >
        @if (productOfProductCard().stock) {
        {{ productOfProductCard().stock }} left } @else { Out of stock }
      </span> -->
    </div>
  `,
  styles: `
  `
})
export class ProductCardComponent {
   productOfProductCard= input.required<Product>();  // @input product:Product;

   cartService=inject(CartService);
}
 