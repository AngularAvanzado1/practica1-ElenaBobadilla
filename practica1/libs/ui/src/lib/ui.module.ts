import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionDetailComponent } from './region-detail/region-detail.component';
import { ContinentDetailComponent } from './continent-detail/continent-detail.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ RegionDetailComponent, ContinentDetailComponent, CountryDetailComponent],
  exports: [ RegionDetailComponent, ContinentDetailComponent, CountryDetailComponent]
})
export class UiModule {}
