import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GeoService } from '../geo.service';

@Component({
  selector: 'practica1-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: any;
  region_code: any;

  constructor(private route: ActivatedRoute,
    private router: Router, private geoService: GeoService) { }

  ngOnInit() {
    this.region_code = this.route.snapshot.paramMap.get('region_code');
    this.countries = this.geoService.getCountries(this.region_code);
  }

}
