import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { ProductListComponent } from "./pages/product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header/>
    <router-outlet/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ecommPro';
}
