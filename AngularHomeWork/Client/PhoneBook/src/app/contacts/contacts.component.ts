import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  persons: Person[] = [
    { id: 1, name: 'Ceasar', number: '8832123', comment: 'Test1' },
    { id: 2, name: 'Godwin', number: '2123125', comment: 'Test3' },
    { id: 3, name: 'Gendalf', number: '31231232', comment: 'Test5' },
  ];

  selectedPerson: Person;

  constructor() { }

  ngOnInit() {
  }

  onSelect(person: Person) {
    this.selectedPerson = person;
  }

  addNewPerson() {
    const person: Person = { id: this.persons.length + 1, name: '', number: '', comment: 'New person' };
    this.persons.push(person);
    this.selectedPerson = person;
  }

  removePerson(person: Person) {
    const index = this.persons.indexOf(person);
    this.persons.splice(index, 1);
    if (this.persons.length > 0) {
      this.selectedPerson = this.persons[0];
    } else {
      this.selectedPerson = null;
    }
  }
}
