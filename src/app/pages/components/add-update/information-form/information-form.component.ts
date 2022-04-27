import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.css']
})
export class InformationFormComponent implements OnInit {



  @Output() createCardEmitter = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  createCard(){
  }
}
