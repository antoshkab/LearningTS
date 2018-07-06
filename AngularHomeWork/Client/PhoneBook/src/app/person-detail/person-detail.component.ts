import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { ContactService } from '../contact.service';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  @Input()
  person: Person;

  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute, private locationService: Location) { }

  ngOnInit() {
    this.loadContact();
  }

  loadContact(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.contactService.getContact(id).subscribe(person => {
      if (person == null || person === undefined) {
        this.locationService.go('404');
      }
      this.person = person;
    });
  }

goBack(): void {
  this.locationService.back();
}

}
