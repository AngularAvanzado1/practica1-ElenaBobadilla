import { Component, OnInit } from '@angular/core';
import { GeoService } from '../geo.service';

@Component({
  selector: 'practica1-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  regions: any;

  constructor(private geoService: GeoService) { }

  ngOnInit() {
     this.regions = this.geoService.getRegions();
  }

}
