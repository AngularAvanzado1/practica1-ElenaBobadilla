import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentListComponent } from './continent-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('GIVEN: an ContinentListComponent', () => {
  describe('WHEN: the ContinentListComponent is compiled', () => {

    beforeEach(async(() => {
      jest.setTimeout(10000);

      TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ContinentListComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: []
      }).compileComponents();
    }));

    it('THEN: should create the component', () => {
      const fixture = TestBed.createComponent(ContinentListComponent);
      fixture.componentInstance.continents = [
        {"id":"ALB","iso2code":"AL","name":"Albania","region": {"id":"ECS","iso2code":"Z7"},"adminregion":{"id":"ECA","iso2code":"7E","value":"Europe & Central Asia (excluding high income)"},"incomeLevel":{"id":"UMC","iso2code":"XT","value":"Upper middle income"},"lendingType":{"id":"IBD","iso2code":"XF","value":"IBRD"},"capitalCity":"Tirane","longitude":"19.8172","latitude":"41.3317"},
        {"id":"AND","iso2code":"AD","name":"Andorra","region":{"id":"ECS","iso2code":"Z7"},"adminregion":{"id":"","iso2code":"","value":""},"incomeLevel":{"id":"HIC","iso2code":"XD","value":"High income"},"lendingType":{"id":"LNX","iso2code":"XX","value":"Not classified"},"capitalCity":"Andorra la Vella","longitude":"1.5218","latitude":"42.5075"}      ];

      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should render continent list`, () => {
      const fixture = TestBed.createComponent(ContinentListComponent);
      fixture.componentInstance.continents = [
        {"id":"ALB","iso2code":"AL","name":"Albania","region": {"id":"ECS","iso2code":"Z7","value":"Europe & Central Asia"},"adminregion":{"id":"ECA","iso2code":"7E","value":"Europe & Central Asia (excluding high income)"},"incomeLevel":{"id":"UMC","iso2code":"XT","value":"Upper middle income"},"lendingType":{"id":"IBD","iso2code":"XF","value":"IBRD"},"capitalCity":"Tirane","longitude":"19.8172","latitude":"41.3317"},
        {"id":"AND","iso2code":"AD","name":"Andorra","region":{"id":"ECS","iso2code":"Z7","value":"Europe & Central Asia"},"adminregion":{"id":"","iso2code":"","value":""},"incomeLevel":{"id":"HIC","iso2code":"XD","value":"High income"},"lendingType":{"id":"LNX","iso2code":"XX","value":"Not classified"},"capitalCity":"Andorra la Vella","longitude":"1.5218","latitude":"42.5075"}      ];

      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h3').textContent).toContain('Lista de continentes');
    });

  });
});
