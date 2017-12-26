import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  testProduct: Product;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.testProduct = new Product();
    this.testProduct.price = 69;
    this.testProduct.description = 'Best product ever';
    this.testProduct.rating = 4.5;
    this.testProduct.title = 'THE BEST PRODUCT';
    this.products = [this.testProduct];
   }

  ngOnInit() {
  }

}
