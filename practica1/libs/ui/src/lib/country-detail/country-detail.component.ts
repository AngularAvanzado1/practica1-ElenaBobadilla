import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../../../../apps/practica1/src/app/model/country.interface';

@Component({
  selector: 'practica1-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  @Input() public country: Country;

  constructor() { }

  ngOnInit() {

  }

}
