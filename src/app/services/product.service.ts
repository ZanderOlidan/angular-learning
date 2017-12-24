import { Injectable } from '@angular/core';

export class Product {
  title: string;
  price: number;
  description: string;
  rating: number;
};

@Injectable()
export class ProductService {

  constructor() { }

  getProducts():Array<Product> { 
    return null
  }

}
