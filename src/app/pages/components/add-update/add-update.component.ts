import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {

  inputTitle: string;
  constructor() {
    this.inputTitle = '';
  }

  ngOnInit(): void {
  }

}
