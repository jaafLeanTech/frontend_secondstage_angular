import { Component, OnInit } from '@angular/core';
import { IPlos, PlosService } from './services/plos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend_assessment_week_dos';
  documents:  Array<IPlos> = [];

  constructor(private plosService: PlosService) {
  }

  ngOnInit() {
    this.plosService.getList().subscribe((datos: any) => {
      this.documents = datos.response.docs;
    });
  }

}
