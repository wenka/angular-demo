import {Component, OnInit} from '@angular/core';
import {products} from '../../../ts/products';

const STORAGE_KEY = 'product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList = products;
  product = {
    name: null,
    price: null
  };
  warn;

  constructor() {
    if (window.localStorage.getItem(STORAGE_KEY)) {
      this.productList = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    }
  }

  ngOnInit() {
  }

  addProduct() {
    console.log('add product.', this.product);
    if (!this.product.name) {
      this.warn = `product's name must be not null !`;
      return;
    }
    if (!this.product.price && this.product.price > 0) {
      this.warn = `product's price must be not null and must be more than the zero !`;
      return;
    }
    this.warn = null;
    this.productList.push(this.product);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.productList));
    this.product = {
      name: null,
      price: null
    };
  }
}
