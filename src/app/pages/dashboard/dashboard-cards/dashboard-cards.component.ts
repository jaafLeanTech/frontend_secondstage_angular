import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.css']
})
export class DashboardCardsComponent implements OnInit {

  @Input() titleDisplay = '';
  @Input() journal = '';
  @Input() abstract = [];

  constructor() { }

  ngOnInit(): void {
  }

  deleteCard(): void {

  }


}
