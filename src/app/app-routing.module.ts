import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VioletCityComponent } from './violet-city/violet-city.component';
import { AzaleaTownComponent } from './azalea-town/azalea-town.component';
import { BlackthornCityComponent } from './blackthorn-city/blackthorn-city.component';
import { CianwoodCityComponent } from './cianwood-city/cianwood-city.component';
import { EcruTeakCityComponent } from './ecru-teak-city/ecru-teak-city.component';
import { GoldenRodCityComponent } from './golden-rod-city/golden-rod-city.component';
import { MahoganyTownComponent } from './mahogany-town/mahogany-town.component';
import { OlivineCityComponent } from './olivine-city/olivine-city.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path:'violet', component: VioletCityComponent,
  },
  {
    path:'azalea', component: AzaleaTownComponent,
  },
  {
    path:'blackthorn', component: BlackthornCityComponent,
  },
  {
    path:'cianwood', component: CianwoodCityComponent,
  },
  {
    path:'ecruteak', component: EcruTeakCityComponent,
  },
  {
    path:'goldenrod', component: GoldenRodCityComponent,
  },
  {
    path:'mahogany', component: MahoganyTownComponent,
  },
  {
    path:'olivine', component: OlivineCityComponent,
  },
  {
    path:'landingpage', component: LandingPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
