import { Component, OnInit, Input } from '@angular/core';
import { Continent } from '../../model/continent.interface';

@Component({
  selector: 'practica1-continent-list',
  templateUrl: './continent-list.component.html',
  styleUrls: ['./continent-list.component.css']
})
export class ContinentListComponent implements OnInit {

  @Input() public continents: Continent[];

  constructor() { }

  ngOnInit() {
  }

}
