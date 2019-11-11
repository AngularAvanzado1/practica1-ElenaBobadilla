import { Region } from './region.interface';

export interface Country {
  id: number;
  iso2Code: string;
  name: string;
  region: Region;
  capitalCity: string;
  longitude: string;
  latitude: string;
}
