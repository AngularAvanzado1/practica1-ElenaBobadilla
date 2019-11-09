import { Component, OnInit, Input } from '@angular/core';
import { Region } from '../../model/region.interface';

@Component({
  selector: 'practica1-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

  @Input() public regions: Region[];

  constructor() { }

  ngOnInit() {
  }

}
