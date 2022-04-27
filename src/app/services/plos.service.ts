import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IPlos {
  title_display: string;
  journal: string;
  abstract: [];
}

@Injectable({
  providedIn: 'root'
})
export class PlosService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get('https://api.plos.org/search?q=title:DNA');
  }

  update() {

  }

  create() {

  }

  delete() {

  }

}
