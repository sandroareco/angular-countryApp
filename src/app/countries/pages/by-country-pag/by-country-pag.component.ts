import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-pag',
  templateUrl: './by-country-pag.component.html',
})

export class ByCountryPagComponent implements OnInit {

  public countries: Country[] = [];

  public isLoading: boolean = false;

  public initialValue: string = '';

  constructor( private countriesService: CountriesService ) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchCountry(term: string):void {
    
    this.isLoading = true;

    this.countriesService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      })
    
  }

}
