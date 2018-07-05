import { Injectable } from '@angular/core';
import { Person } from './person';
import { Contacts } from './mock-contacts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`http://localhost:64604/api/contacts`);
  }

  getContact(id: number): Person {
    return Contacts.find(p => p.id === id);
  }
}
