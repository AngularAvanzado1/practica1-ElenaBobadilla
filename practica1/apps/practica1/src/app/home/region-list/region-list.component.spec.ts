import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegionListComponent } from './region-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NumericRegionsPipe } from '../../numeric-regions.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('GIVEN: an RegionListComponent', () => {
  describe('WHEN: the RegionListComponent is compiled', () => {

    beforeEach(async(() => {
      jest.setTimeout(10000);

      TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RegionListComponent, NumericRegionsPipe],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: []
      }).compileComponents();
    }));

    it('THEN: should create the component', () => {
      const fixture = TestBed.createComponent(RegionListComponent);
      fixture.componentInstance.regions = [
        {"id":"2","code":"ECS","iso2code":"Z7","name":"Europe & Central Asia"},
        {"id":"3","code":"LCN","iso2code":"ZJ","name":"Latin America & Caribbean "},
        {"id":"4","code":"MEA","iso2code":"ZQ","name":"Middle East & North Africa"},
        {"id":"6","code":"NAC","iso2code":"XU","name":"North America"}
      ];
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should render region list`, () => {
      const fixture = TestBed.createComponent(RegionListComponent);
      fixture.componentInstance.regions = [
          {"id":"2","code":"ECS","iso2code":"Z7","name":"Europe & Central Asia"},
          {"id":"3","code":"LCN","iso2code":"ZJ","name":"Latin America & Caribbean "},
          {"id":"4","code":"MEA","iso2code":"ZQ","name":"Middle East & North Africa"},
          {"id":"6","code":"NAC","iso2code":"XU","name":"North America"}
        ];

      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h3').textContent).toContain('Lista de regiones');
    });

  });
});
