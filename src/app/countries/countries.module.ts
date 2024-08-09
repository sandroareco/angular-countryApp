import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ByCapitalPagComponent } from './pages/by-capital-pag/by-capital-pag.component';
import { ByCountryPagComponent } from './pages/by-country-pag/by-country-pag.component';
import { ByRegionPagComponent } from './pages/by-region-pag/by-region-pag.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';




@NgModule({
  declarations: [
    ByCapitalPagComponent,
    ByCountryPagComponent,
    ByRegionPagComponent,
    CountryPageComponent,
    CountryTableComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
  ]
})
export class CountriesModule { }
