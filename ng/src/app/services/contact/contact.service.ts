import { Injectable } from '@angular/core';
import { Contact } from '../../classes/contact.class';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {

  private contactUrl = 'http://localhost:8000/contact/';

  constructor(private httpClient: HttpClient) { }

  addContact (contact: Contact): Observable<Contact> {
    console.log(contact);
    return this.httpClient.post<Contact>(this.contactUrl, contact, httpOptions);
  }

}
