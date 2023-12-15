import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, switchMap } from 'rxjs';

import { Country } from '../interfaces/country.interface';

const URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  searchByCapital(term: string): Observable<Country[]> {

    const endpoint = `capital/${term}`;
    return this.getCountries(endpoint);

  }

  searchByCountry(term: string): Observable<Country[]> {

    const endpoint = `name/${term}`;
    return this.getCountries(endpoint);

  }

  searchByRegion(term: string): Observable<Country[]> {

    const endpoint = `region/${term}`;
    return this.getCountries(endpoint);

  }

  searchCountryByAlphacode(id: string): Observable<Country> {
    const endpoint = `alpha/${id}`;
    return this.getCountries(endpoint)
      .pipe(switchMap(resp => of(resp[0])));
  }

  private getCountries(endpoint: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${URL}/${endpoint}`)
      .pipe(
        catchError(err => {
          console.log('Error:', err);
          return of([])
        })
      );
  }

}
