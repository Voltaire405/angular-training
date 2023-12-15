import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'byregion-page',
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor(private service: CountryService) {}

  public onValueEventHandler(term: string): void {
    this.service.searchByRegion(term)
      .subscribe((countries) => this.countries = countries);
  }

}
