import { Injectable } from '@angular/core';
import { Person } from './person';
import { Contacts } from './mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Person[] {
    return Contacts;
  }

  getContact(id: number): Person {
    return Contacts.find(p => p.id === id);
  }
}
