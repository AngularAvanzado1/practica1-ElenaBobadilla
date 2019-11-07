import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor() { }

  getUrlRegions(){
    return 'http://api.worldbank.org/v2/region/?format=json';
  }

  getURLContinents(region_code){
    return 'http://api.worldbank.org/v2/region/'+region_code+'/country?per_page=1000&format=json';
  }

  getURLCountries(region_code){
    return 'http://api.worldbank.org/V2/country/'+region_code+'?format=json';
  }


}
