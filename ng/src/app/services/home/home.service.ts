import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NewsHome } from '../../classes/homeNews.class';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';




@Injectable()
export class HomeService {

  private homeUrl ='http://localhost:8000/home.json';  // URL to web api
  constructor(private http: HttpClient) {}

  getNewsHome (): Observable<NewsHome[]> {
    return this.http.get<NewsHome[]>(this.homeUrl);
  }
}


