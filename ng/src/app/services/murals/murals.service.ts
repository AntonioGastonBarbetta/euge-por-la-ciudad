import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Mural} from '../../classes/mural.class';

@Injectable()
export class MuralsService {

  private muralUrl = 'http://localhost:8000/murales/';

  constructor(private http: HttpClient) { }

  getMurals(): Observable<Mural[]> {
    return this.http.get<Mural[]>(this.muralUrl);
  }
}
