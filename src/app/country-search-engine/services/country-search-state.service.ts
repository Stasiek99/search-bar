import { Injectable } from "@angular/core";

import { CountrySearched } from "../interfaces/country-searched.interface";
import { CountrySearchLocalStorageService } from "./country-search-local-storage.service";

@Injectable({
  providedIn: "root",
})
export class CountrySearchStateService {
  localStorageValue: CountrySearched[];
  private readonly defaultValue = [];

  constructor(private countrySearchLocalStorageService: CountrySearchLocalStorageService) {
    const tmp: CountrySearched[] | null = this.countrySearchLocalStorageService.getData();
    this.localStorageValue = tmp ?? this.defaultValue;
  }

  onSubmitted(searchInput: CountrySearched): void {
    this.localStorageValue.push(searchInput);
    this.countrySearchLocalStorageService.setItem(this.localStorageValue);
  }
}
