import { Injectable } from "@angular/core";

import { CountrySearched } from "../interfaces/country-searched.interface";

@Injectable({
  providedIn: "root",
})
export class CountrySearchLocalStorageService {
  private readonly countriesStorageItemKey = "countries_list";

  setItem(listOfSearchedCountries: CountrySearched[]): void {
    window.localStorage.setItem(this.countriesStorageItemKey, JSON.stringify(listOfSearchedCountries));
  }

  getData(): CountrySearched[] | null {
    const objectToParse: string | null = window.localStorage.getItem(this.countriesStorageItemKey);
    return objectToParse ? JSON.parse(objectToParse) : null;
  }
}
