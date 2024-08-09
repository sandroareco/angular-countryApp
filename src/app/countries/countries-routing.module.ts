import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ByCapitalPagComponent } from './pages/by-capital-pag/by-capital-pag.component';
import { ByCountryPagComponent } from './pages/by-country-pag/by-country-pag.component';
import { ByRegionPagComponent } from './pages/by-region-pag/by-region-pag.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
    {
        path: 'by-capital',
        component: ByCapitalPagComponent,
    },
    {
        path: 'by-country',
        component: ByCountryPagComponent,
    },
    {
        path: 'by-region',
        component: ByRegionPagComponent,
    },
    {
        path: 'by/:id',
        component: CountryPageComponent,
    },
    {
        path: '**',
        redirectTo: 'by-capital'
    }
]


@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ],
})
export class CountriesRoutingModule { }
