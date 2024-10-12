import { Injectable } from "@angular/core";

import { CountrySearched } from "../interfaces/country-searched.interface";

@Injectable({
  providedIn: "root",
})
export class CountrySearchLocalStorageService {
  private readonly searchHistoryKeyPrefix = "search_history_";

  setItem (userLogin: string, listOfSearchedCountries: CountrySearched[]): void {
    const key = this.getUserKey(userLogin);
    window.localStorage.setItem(key, JSON.stringify(listOfSearchedCountries));
  }

  getData(userLogin: string): CountrySearched[] | null {
    const key = this.getUserKey(userLogin);
    const objectToParse: string | null = window.localStorage.getItem(key);
    return objectToParse ? JSON.parse(objectToParse) : null;
  }

  clearSearchHistory(userLogin: string): void {
    const key = this.getUserKey(userLogin);
    window.localStorage.removeItem(key);
  }

  private getUserKey(userLogin: string): string {
    return `${this.searchHistoryKeyPrefix}${userLogin}`;
  }
}
