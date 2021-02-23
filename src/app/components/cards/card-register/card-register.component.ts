import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.scss'],
})
export class CardRegisterComponent implements OnInit {
  @Output() isShow = new EventEmitter<boolean>();
  state = false;

  constructor() {}

  ngOnInit(): void {}

  showGrid() {
    this.state = !this.state;
    console.log(this.state, 'this.state ');

    this.isShow.emit(this.state);
  }
}
