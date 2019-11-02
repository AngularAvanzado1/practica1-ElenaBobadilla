import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GeoService } from '../geo.service';

@Component({
  selector: 'practica1-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  region_code: string;
  continents: any;

  constructor(private route: ActivatedRoute,
    private router: Router, private geoService: GeoService) { }

  ngOnInit() {
    this.region_code = this.route.snapshot.paramMap.get('region_code');
    this.continents = this.geoService.getContinents(this.region_code);
  }

}
