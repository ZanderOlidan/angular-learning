import { Component } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'auction-app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  products: Array<Product>;
  animals: string[] = ['Dog', 'Cat', 'Pig'];

  constructor(private productService : ProductService) {
    this.products = this.productService.getProducts();
  }
}
