import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { CountrySearchStateService } from "../services/country-search-state.service";
import { CountryDataService } from "../services/country-data.service";
import { CountryElement } from "../interfaces/country-element.interface";
import { CountrySearched } from "../interfaces/country-searched.interface";

@Component({
  selector: 'app-country-search-engine',
  templateUrl: './country-search-engine.component.html',
  styleUrls: ['./country-search-engine.component.scss']
})
export class CountrySearchEngineComponent implements OnInit{
  inputValue: string = "";
  allCountries: CountryElement[] = [];
  filteredCountries: CountryElement[] = [];
  private readonly urlFragment: string = "https://www.google.com/search?q=";

  constructor(private http: HttpClient, private countryDataService: CountryDataService, private countrySearchStateService: CountrySearchStateService) {
  }

  ngOnInit(): void {
    this.countryDataService.httpGetData()
      .subscribe(countries => {
        this.allCountries = countries;
      });
  }

  onSubmitted(): void {
    if (this.inputValue.trim() !== "") {
      const tmp: CountrySearched = this.createUniqueSearchedCountry(this.inputValue);
      this.countrySearchStateService.onSubmitted(tmp);
      this.redirectToGoogle();
    }
  }

  onSearchBarInputChanged(searchString: string): void {
    this.inputValue = searchString;
    this.filteredCountries = this.getFilteredCountries(searchString);
  }

  onAutoCompleteElementsSelected(labelElement: string): void {
    this.inputValue = labelElement;
    const tmp: CountrySearched = this.createUniqueSearchedCountry(this.inputValue);
    this.countrySearchStateService.onSubmitted(tmp);
    this.redirectToGoogle();
  }

  onSelectAutoCompleteElements(countryName: string): void {
    this.inputValue = countryName;
    this.onSubmitted();
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      event.preventDefault();
      this.onSubmitted();
    }
  }

  shouldShowAutoCompleteList(): boolean {
    return this.inputValue.trim() !== "" && this.filteredCountries.length > 0;
  }

  private getFilteredCountries(searchString: string): CountryElement[] {
    return this.allCountries.filter(elem => elem.name.toLowerCase().includes(searchString.toLowerCase()));
  }

  private createUniqueSearchedCountry(input: string): CountrySearched {
    return {
      input,
      date: (new Date()).toISOString()
    }
  }

  private redirectToGoogle(): void {
    const searchRedirectUrlWithQuery: string = this.urlFragment + this.inputValue;
    window.location.href = searchRedirectUrlWithQuery;
  }
}
