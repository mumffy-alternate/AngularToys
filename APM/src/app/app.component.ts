import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  providers: [ProductService],
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <div>The First Component</div>
    </div>
    <br />
    <pm-products></pm-products>
    `
})
export class AppComponent {
  pageTitle: string = 'BorpCo Product Management';
}
