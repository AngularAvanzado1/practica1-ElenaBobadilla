import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CountryComponent } from './country.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


describe('GIVEN: an CountryComponent', () => {
  describe('WHEN: the CountryComponent is compiled', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [CountryComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: []
      }).compileComponents();
    }));

    it('THEN: should create the component', () => {
      const fixture = TestBed.createComponent(CountryComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`THEN: should render 'Datos del país' in a H2 tag`, () => {
      const fixture = TestBed.createComponent(CountryComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Datos del país');
    });

  });  
}); 
