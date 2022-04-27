import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abstract-form',
  templateUrl: './abstract-form.component.html',
  styleUrls: ['./abstract-form.component.css']
})
export class AbstractFormComponent implements OnInit {
  newAbstract: string;
  constructor() {
    this.newAbstract = '';
  }

  ngOnInit(): void {
  }

}
