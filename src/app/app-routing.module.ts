import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecificationsComponent } from './product-specifications/product-specifications.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { InstructionsComponent } from './instructions/instructions.component';

export const routes: Routes = [
  {
    path:'overview', component: ProductOverviewComponent,
  },
  {
    path:'specifications', component: ProductSpecificationsComponent,
  },
  {
    path:'key-features', component: KeyFeaturesComponent,
  },
  {
    path:'instructions', component: InstructionsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
