import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NumericRegionsPipe } from '../numeric-regions.pipe';

import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('GIVEN: an HomeComponent', () => {
  describe('WHEN: the HomeComponent is compiled', () => {
    let router: Router;

    beforeEach(async(() => {
      jest.setTimeout(10000);
 
      TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [HomeComponent, NumericRegionsPipe],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: []
      }).compileComponents();
    }));

    it('THEN: should create the component', () => {
      const fixture = TestBed.createComponent(HomeComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`THEN: should render 'Home page' in a H2 tag`, () => {
      const fixture = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Home page');
    });

    it('THEN: should have REGIONS', async(() => {
      const fixture = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      
      setTimeout(() => {
        expect(compiled.querySelectorAll('.region')).not.toBe(null);
      }, 700);      

    }));

    it('THEN: show 7 REGIONS', async(() => {
      const fixture = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      setTimeout(() => {
        expect(compiled.querySelectorAll('.region').length).toEqual(7);
      }, 1000);      

    }));

;

  });  
}); 
