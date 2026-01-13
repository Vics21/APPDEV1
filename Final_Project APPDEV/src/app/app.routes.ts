import { Routes } from '@angular/router';
import { Carlist } from './carlist/carlist';
import { Comparison } from './comparison/comparison';
import { Customization } from './customization/customization';
import { CarSearch } from './car-search/car-search'

export const routes: Routes = [
  { path: 'carlist', component: Carlist },
  { path: 'comparison', component: Comparison },
  { path: 'customization', component: Customization },
  { path: 'carsearch', component: CarSearch }
];