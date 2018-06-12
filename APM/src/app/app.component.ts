import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  providers: [ProductService],
  templateUrl: './app.component.html'
})
export class AppComponent {
  pageTitle: string = 'BorpCo Product Management';
}
