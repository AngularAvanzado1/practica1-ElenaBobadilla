import { TestBed,async } from '@angular/core/testing';

import { GeoService } from './geo.service';

describe('GeoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoService = TestBed.get(GeoService);
    expect(service).toBeTruthy();
  });

  it(`THEN: should return worldbank url to get regions when call 'getUrlRegions()'`, () => {
    const service: GeoService = TestBed.get(GeoService);
    const url$: String = service.getUrlRegions();
    expect(url$).toContain('http://api.worldbank.org/v2/region/');
  }); 

  it(`THEN: should return worldbank url to get continents when call 'getURLContinents()'`, () => {
    const service: GeoService = TestBed.get(GeoService);
    const url$: String = service.getURLContinents('ECS');
    expect(url$).toContain('http://api.worldbank.org/v2/region/ECS/country');
  }); 

  it(`THEN: should return worldbank url to get country when call 'getURLCountries()'`, () => {
    const service: GeoService = TestBed.get(GeoService);
    const url$: String = service.getURLCountries('ESP');
    expect(url$).toContain('http://api.worldbank.org/V2/country/ESP');
  }); 

});
