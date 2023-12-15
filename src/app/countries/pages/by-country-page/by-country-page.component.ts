import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'bycountry-page',
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private service: CountryService) {}

  public onValueEventHandler(term: string): void {
    this.service.searchByCountry(term)
      .subscribe((countries) => this.countries = countries);
  }

}
