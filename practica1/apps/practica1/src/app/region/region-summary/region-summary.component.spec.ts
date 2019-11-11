import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionSummaryComponent } from './region-summary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


describe('GIVEN: an RegionSummaryComponent', () => {
  describe('WHEN: the RegionSummaryComponent is compiled', () => {

    beforeEach(async(() => {
      jest.setTimeout(10000);

      TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RegionSummaryComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: []
      }).compileComponents();
    }));

    it('THEN: should create the component', () => {
      const fixture = TestBed.createComponent(RegionSummaryComponent);
      fixture.componentInstance.summary = {
        'page': '0',
        'pages': '0',
        'total': '0',
      };
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should render summary`, () => {
      const fixture = TestBed.createComponent(RegionSummaryComponent);
      fixture.componentInstance.summary = {
        'page': '0',
        'pages': '0',
        'total': '0',
      };
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('div').textContent).toContain('Página');
      expect(compiled.querySelector('div').textContent).toContain('Total páginas');
      expect(compiled.querySelector('div').textContent).toContain('Total continentes');
    });

  });
});
