import { Region } from './region.interface';

export interface Continent {
  id: string;
  iso2code: string;
  name: string;
  region: Region;
  adminregion?: any;
  incomeLevel?: any;
  lendingType?: any;
  capitalCity?: any;
  longitude?: any;
  latitude?: any;
}
