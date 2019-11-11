import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryComponent } from './home-summary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


describe('GIVEN: an HomeSummaryComponent', () => {
  describe('WHEN: the HomeSummaryComponent is compiled', () => {

    beforeEach(async(() => {
      jest.setTimeout(10000);

      TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeSummaryComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: []
      }).compileComponents();
    }));

    it('THEN: should create the component', () => {
      const fixture = TestBed.createComponent(HomeSummaryComponent);
      fixture.componentInstance.summary = {
        'page': '0',
        'pages': '0',
        'total': '0',
      };
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should render summary`, () => {
      const fixture = TestBed.createComponent(HomeSummaryComponent);
      fixture.componentInstance.summary = {
        'page': '0',
        'pages': '0',
        'total': '0',
      };
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('div').textContent).toContain('Página');
      expect(compiled.querySelector('div').textContent).toContain('Total páginas');
      expect(compiled.querySelector('div').textContent).toContain('Total regiones');
    });

  });
});
