import { Region } from './region.interface';

export interface Continent {
  id: number;
  iso2code: string;
  name: string;
  region: Region;
}
