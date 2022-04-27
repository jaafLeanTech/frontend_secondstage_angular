import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-form',
  templateUrl: './journal-form.component.html',
  styleUrls: ['./journal-form.component.css']
})
export class JournalFormComponent implements OnInit {
  newJournal: string;
  constructor() {
    this.newJournal='';
  }

  ngOnInit(): void {
  }

}
