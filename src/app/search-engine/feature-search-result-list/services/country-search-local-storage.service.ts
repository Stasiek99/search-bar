import { Injectable } from "@angular/core";

import { CountrySearchedInterface } from "../interfaces/country-searched.interface";

@Injectable()
export class CountrySearchLocalStorageService {
  private readonly countriesStorageItemKey = "List of searched countries"

  setItem(listOfSearchedCountries: CountrySearchedInterface[]): void {
    window.localStorage.setItem(this.countriesStorageItemKey, JSON.stringify(listOfSearchedCountries));
  }

  getData(): CountrySearchedInterface[] | null {
    const objectToParse: string | null = window.localStorage.getItem(this.countriesStorageItemKey);
    return objectToParse ? JSON.parse(objectToParse) : null;
  }
}
