import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionSummaryComponent } from './region-summary.component';

describe('RegionSummaryComponent', () => {
  let component: RegionSummaryComponent;
  let fixture: ComponentFixture<RegionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
