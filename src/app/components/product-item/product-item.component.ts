import { Component, OnInit, Input } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [ProductService]
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit() {
  }

}
