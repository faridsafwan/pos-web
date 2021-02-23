import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-summary-item',
  templateUrl: './card-summary-item.component.html',
  styleUrls: ['./card-summary-item.component.scss'],
})
export class CardSummaryItemComponent implements OnInit {
  @Input() total = 0;

  constructor() {}

  ngOnInit(): void {}
}
