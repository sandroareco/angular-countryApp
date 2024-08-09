import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-pag',
  templateUrl: './by-capital-pag.component.html',
})

export class ByCapitalPagComponent implements OnInit {

  public countries: Country[] = [];

  public isLoading: boolean = false;

  public initialValue: string = '';

  constructor( private countriesService: CountriesService ) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string):void {

    this.isLoading = true;

    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      })
    
  }

}
