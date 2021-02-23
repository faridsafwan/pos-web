import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() cartItem = [];
  @Output() removedItem = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  removeItem(item) {
    this.removedItem.emit(item);
  }
}
