import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoComponent } from './geo/geo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GeoComponent],
  exports: [GeoComponent]
})
export class UiModule {}
