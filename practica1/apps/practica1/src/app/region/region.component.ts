import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GeoService } from '../geo.service';
import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Continent } from '../model/continent.interface';

@Component({
  selector: 'practica1-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent implements OnInit {

  region_code: string;
  continents: Continent[];

  constructor(private route: ActivatedRoute,
    private router: Router, private geoService: GeoService, private http: HttpClient, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.region_code = this.route.snapshot.paramMap.get('region_code');

    this.http.get(this.geoService.getURLContinents(this.region_code)).subscribe(
      data => {
        this.continents = data[1];
        this.cdr.detectChanges();
      },
      err => {
        console.log(err);
      }
    );

  }

}
