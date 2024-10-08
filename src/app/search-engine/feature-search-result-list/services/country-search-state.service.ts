import { Injectable } from "@angular/core";

import { CountrySearched } from "../interfaces/country-searched.interface";
import { CountrySearchLocalStorageService } from "./country-search-local-storage.service";

@Injectable({
  providedIn: "root",
})
export class CountrySearchStateService {
  private readonly searchedCountries: CountrySearched[];
  private readonly defaultValue = [];

  constructor(private countrySearchLocalStorageService: CountrySearchLocalStorageService) {
    const tmp: CountrySearched[] | null = this.countrySearchLocalStorageService.getData();
    this.searchedCountries = tmp ?? this.defaultValue;
  }

  onSubmitted(searchInput: CountrySearched): void {
    this.searchedCountries.push(searchInput);
    this.countrySearchLocalStorageService.setItem(this.searchedCountries);
  }

  getSearchedCountries(): CountrySearched[] {
    return this.searchedCountries;
  }
}
