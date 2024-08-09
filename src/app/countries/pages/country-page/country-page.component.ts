import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      //opcion 2 y mejor
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ))
            )
      .subscribe( country => {
        if ( !country ) return this.router.navigateByUrl('');
        
        return this.country = country;
      })
  }

  //opcion 1 y despies llamo al metodo en ngOnInit pero es mucha logica

  // searchCountry(code: string) {
  //   this.countriesService.searchCountryByAlphaCode( code )
  //         .subscribe( country => {
  //           console.log(country)
  //         })
  // }

}
