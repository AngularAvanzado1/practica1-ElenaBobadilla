import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RegionComponent } from './region.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


describe('GIVEN: an RegionComponent', () => {
  describe('WHEN: the RegionComponent is compiled', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [RegionComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: []
      }).compileComponents();
    }));

    it('THEN: should create the component', () => {
      const fixture = TestBed.createComponent(RegionComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`THEN: should render 'Página región continental' in a H2 tag`, () => {
      const fixture = TestBed.createComponent(RegionComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Página región continental ');
    });

  });  
}); 

