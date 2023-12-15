import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'bycapital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  /**
   *
   */
  constructor(private service: CountryService) { }

  public countries: Country[] = [];

  onValueEventHandler(value: string) {
    this.service.searchByCapital(value)
      .subscribe(countries => {
        this.countries = countries;
        console.log(countries);
      });
  }

}
