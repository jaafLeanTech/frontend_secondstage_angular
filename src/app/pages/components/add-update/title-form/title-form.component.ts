import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-form',
  templateUrl: './title-form.component.html',
  styleUrls: ['./title-form.component.css']
})
export class TitleFormComponent implements OnInit {

  @Input() newTitlePrueba: string;

  newTitle: string;
  constructor() {
    this.newTitle = '';
    this.newTitlePrueba = '';
  }


  ngOnInit(): void {
  }


}
