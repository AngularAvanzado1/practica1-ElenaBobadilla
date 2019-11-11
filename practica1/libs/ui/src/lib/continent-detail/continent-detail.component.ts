import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'practica1-continent-detail',
  templateUrl: './continent-detail.component.html',
  styleUrls: ['./continent-detail.component.css']
})
export class ContinentDetailComponent implements OnInit {

  @Input() public continent: any;

  constructor() { }

  ngOnInit() {
  }

}
