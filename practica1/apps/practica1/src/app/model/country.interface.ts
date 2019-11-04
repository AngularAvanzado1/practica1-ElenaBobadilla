import { Region } from './region.interface';

export interface Country {
  id: number;
  iso2code: string;
  name: string;
  region: Region;
  capitalCity: string;
  longitude: string;
  latiude: string;
}
