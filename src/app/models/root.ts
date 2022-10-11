import { Weather } from './weather';
import { Sys } from './sys';
import { Clouds } from './clouds';
import { Wind } from './wind';
import { Main } from './main';
import { Coord } from './coord';
export class Root {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
