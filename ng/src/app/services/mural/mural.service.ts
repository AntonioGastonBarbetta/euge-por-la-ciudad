import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Mural } from '../../classes/mural.class';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MuralService {

  private muralUrl = 'http://localhost:8000/murales/';

  constructor(private http: HttpClient) { }

  getMural(slug: string): Observable<Mural> {
    return this.http.get<Mural>(this.muralUrl+slug+'.json');
  }
}
