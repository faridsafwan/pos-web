/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  isShow = false;
  selectedCategory;
  currentItem = [];
  cartItem = [];
  total = 0;
  categories = [
    {
      name: 'Phone',
    },
    {
      name: 'Tempered Glass',
    },
    {
      name: 'Casing',
    },
    {
      name: 'Tablet',
    },
    {
      name: 'Laptop',
    },
  ];

  items = [
    {
      _id: '1',
      name: 'iPhone X',
      price: '40',
      quantity: '2',
      total: '80',
      categories: 'Phone',
    },
    {
      _id: '2',
      name: 'iPhone 12',
      price: '23',
      quantity: '1',
      total: '23',
      categories: 'Phone',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.currentItem = this.categories;
  }

  showGrid(bool) {
    this.isShow = bool;
  }

  selectItem(item) {
    if (this.selectedCategory) {
      this.addToCart(item);
    } else {
      this.selectedCategory = item.name;
      this.currentItem = this.items.filter(
        (e) => e.categories === this.selectedCategory
      );
    }
  }

  backToCategories() {
    this.selectedCategory = null;
    this.currentItem = this.categories;
  }

  addToCart(item) {
    this.cartItem.push(item);
    this.calculateTotal();
  }

  removeFromCart(removedItem) {
    this.cartItem = this.cartItem.filter(
      (item) => item._id !== removedItem._id
    );
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    if (this.cartItem.length > 0) {
      this.cartItem.forEach((e) => {
        this.total += Number(e.total);
      });
    } else {
      this.total = 0;
    }
  }
}
