import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <div>
      <img src="http://placehold.it/820x320">
      <h4>{{productTitle}}</h4>
    </div>
  `
})
export class ProductDetailComponent implements OnInit {
  productTitle: string;

  constructor(route: ActivatedRoute) {
    this.productTitle = route.snapshot.params['prodTitle'];
  }

  ngOnInit() {
  }

}
