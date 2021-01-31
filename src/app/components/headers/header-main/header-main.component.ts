import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss'],
})
export class HeaderMainComponent implements OnInit {
  @Input() isUse = true;

  constructor() {}

  ngOnInit(): void {}
}
