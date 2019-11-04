import { Pipe, PipeTransform } from '@angular/core';
import { Region } from './model/region.interface';

@Pipe({
  name: 'numericRegions'
})
export class NumericRegionsPipe implements PipeTransform {

  transform(allRegions: Region[]) {
    return allRegions.filter(region => region.id!=='');
  }

}
