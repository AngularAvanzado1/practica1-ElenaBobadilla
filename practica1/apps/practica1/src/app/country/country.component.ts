import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GeoService } from '../geo.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { Country } from '../model/country.interface';

@Component({
  selector: 'practica1-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent implements OnInit {
  countries: Country[];
  region_code: any;

  constructor(private route: ActivatedRoute,
    private router: Router, private geoService: GeoService, private http: HttpClient, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.region_code = this.route.snapshot.paramMap.get('region_code');

    this.http.get(this.geoService.getURLCountries(this.region_code)).subscribe(
      data => {
        this.countries = data[1];
        this.cdr.detectChanges(); 
      },
      err => {
        console.log(err);
      }
    );
  }


}
