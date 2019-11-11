import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'practica1-region-detail',
  templateUrl: './region-detail.component.html',
  styleUrls: ['./region-detail.component.css']
})
export class RegionDetailComponent implements OnInit {

  @Input() public region: any;

  constructor() { }

  ngOnInit() {
  }

}
