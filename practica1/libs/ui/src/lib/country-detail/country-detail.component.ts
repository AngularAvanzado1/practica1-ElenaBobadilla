import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'practica1-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  @Input() public country: [];

  constructor() { }

  ngOnInit() {
    
  }

}
