import { Injectable } from '@angular/core';
import { AboutUs } from '../../classes/about-us.class';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AboutUsService {

  private aboutUsUrl = 'http://localhost:8000/about-us/';

  constructor(private http: HttpClient) {}

  getAboutUs(): Observable<AboutUs[]> {
    return this.http.get<AboutUs[]>(this.aboutUsUrl);
  }

}
