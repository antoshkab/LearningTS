import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  persons: Person[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactService.getContacts().subscribe(contacts => this.persons = contacts);
  }

  addNewPerson() {
    const person: Person = { id: this.persons.length + 1, name: '', number: '', comment: 'New person' };
    this.persons.push(person);
  }

  removePerson(person: Person) {
    const index = this.persons.indexOf(person);
    this.persons.splice(index, 1);
  }
}
