import { Injectable } from '@angular/core';
import { News } from '../../classes/nota.class';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotaService {

  private newUrl = 'http://localhost:8000/notas/';

  constructor(private http: HttpClient) { }

  getNew(slug: string): Observable<News> {

    return this.http.get<News>(this.newUrl+slug+'.json');
  }

}
