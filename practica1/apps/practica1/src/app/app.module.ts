import { UiModule } from '@practica1/ui';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RegionComponent } from './region/region.component';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { NumericRegionsPipe } from './numeric-regions.pipe';
import { RegionListComponent } from './home/region-list/region-list.component';
import { HomeSummaryComponent } from './home/home-summary/home-summary.component';
import { ContinentListComponent } from './region/continent-list/continent-list.component';
import { RegionSummaryComponent } from './region/region-summary/region-summary.component';

@NgModule({
  declarations: [AppComponent, RegionComponent, CountryComponent, HomeComponent, NumericRegionsPipe, RegionListComponent, HomeSummaryComponent, ContinentListComponent, RegionSummaryComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'region/:region_code',
        component: RegionComponent
      },
      {
        path: 'country/:region_code',
        component: CountryComponent,
      },
    ], { initialNavigation: 'enabled' }),
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RegionComponent, CountryComponent, HomeComponent, NumericRegionsPipe, RegionListComponent, HomeSummaryComponent, ContinentListComponent, RegionSummaryComponent]
})
export class AppModule {}
