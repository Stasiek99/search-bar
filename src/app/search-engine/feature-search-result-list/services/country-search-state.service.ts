import { Injectable } from "@angular/core";

import { CountrySearched } from "../interfaces/country-searched.interface";
import { CountrySearchLocalStorageService } from "./country-search-local-storage.service";
import { UserStateService } from "../../../users/feature-create-user/services/user-state.service";

@Injectable({
  providedIn: "root",
})
export class CountrySearchStateService {
  private readonly maxSearchHistory = 15;
  private searchedCountries: CountrySearched[] = [];

  constructor(private countrySearchLocalStorageService: CountrySearchLocalStorageService, private userStateService: UserStateService) {
    this.loadUserHistory();
  }

  onSubmitted(searchInput: CountrySearched): void {
    this.searchedCountries.push(searchInput);

    if (this.searchedCountries.length > this.maxSearchHistory) {
      this.searchedCountries.shift();
    }

    const userLogin = this.userStateService.getLoggedInUser()?.login;
    if (userLogin) {
      this.countrySearchLocalStorageService.setItem(userLogin, this.searchedCountries);
    }
  }

  getSearchedCountries(): CountrySearched[] {
    return this.searchedCountries;
  }

  clearSearchHistory(): void {
    const userLogin = this.userStateService.getLoggedInUser()?.login;
    if (userLogin) {
      this.countrySearchLocalStorageService.clearSearchHistory(userLogin);
      this.searchedCountries = [];
    }
  }

  private loadUserHistory(): void {
    const userLogin = this.userStateService.getLoggedInUser()?.login;
    if (userLogin) {
      const tmp: CountrySearched[] | null = this.countrySearchLocalStorageService.getData(userLogin);
      this.searchedCountries = tmp ?? [];
    }
  }
}
