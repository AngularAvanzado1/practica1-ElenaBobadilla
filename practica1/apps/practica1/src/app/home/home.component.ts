import { Component, OnInit } from '@angular/core';
import { GeoService } from '../geo.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from '../model/region.interface';
import { Observable } from 'rxjs';
import { RegionListComponent } from './region-list/region-list.component';


@Component({
  selector: 'practica1-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  public regions$: Observable<Region[]>;

  constructor(private geoService: GeoService, private http: HttpClient) { }

  ngOnInit() {
    this.regions$ =  this.http.get<Region[]>(this.geoService.getUrlRegions());
  }

}
