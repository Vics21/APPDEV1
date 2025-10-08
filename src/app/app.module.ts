import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VioletCityComponent } from './violet-city/violet-city.component';
import { AzaleaTownComponent } from './azalea-town/azalea-town.component';
import { GoldenRodCityComponent } from './golden-rod-city/golden-rod-city.component';
import { EcruTeakCityComponent } from './ecru-teak-city/ecru-teak-city.component';
import { CianwoodCityComponent } from './cianwood-city/cianwood-city.component';
import { OlivineCityComponent } from './olivine-city/olivine-city.component';
import { MahoganyTownComponent } from './mahogany-town/mahogany-town.component';
import { BlackthornCityComponent } from './blackthorn-city/blackthorn-city.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    VioletCityComponent,
    AzaleaTownComponent,
    GoldenRodCityComponent,
    EcruTeakCityComponent,
    CianwoodCityComponent,
    OlivineCityComponent,
    MahoganyTownComponent,
    BlackthornCityComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
