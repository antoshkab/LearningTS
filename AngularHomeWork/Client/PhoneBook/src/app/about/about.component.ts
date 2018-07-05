import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private locationService: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.locationService.back();
  }

}
