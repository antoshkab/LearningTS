import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  persons: Person[] = [
    { name: 'Ceasar', number: '8832123' },
    { name: 'Godwin', number: '2123125' },
    { name: 'Gendalf', number: '31231232' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
