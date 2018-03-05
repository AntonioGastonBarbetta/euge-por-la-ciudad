import { Injectable } from '@angular/core';
import { News } from '../../classes/nota.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class NotasService {

  private newsUrl = 'http://localhost:8000/notas/';
  constructor(private http: HttpClient) { }

  getNews (): Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl);
  }

}
