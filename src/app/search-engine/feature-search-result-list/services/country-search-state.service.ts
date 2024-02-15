import { Injectable } from '@angular/core';

import { CountrySearchedInterface } from "../interfaces/country-searched.interface";
import { CountrySearchLocalStorageService } from "./country-search-local-storage.service";

@Injectable()
export class CountrySearchStateService {
  private readonly searchedCountries: CountrySearchedInterface[];
  private readonly defaultValue = [];
  constructor(private countrySearchLocalStorageService: CountrySearchLocalStorageService) {
    const tmp: CountrySearchedInterface[] | null = this.countrySearchLocalStorageService.getData();
    this.searchedCountries = tmp ?? this.defaultValue;
  }

  onSubmitted(searchInput: CountrySearchedInterface): void {
    this.searchedCountries.push(searchInput);
    this.countrySearchLocalStorageService.setItem(this.searchedCountries);
  }

  getSearchedCountries(): CountrySearchedInterface[] {
    return this.searchedCountries;
  }
}
