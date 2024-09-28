import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { CountryElement } from "../../interfaces/country-element.interface";
import { CountrySearched } from "../../interfaces/country-searched.interface";
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { SearchAutocompleteComponent } from "../../components/search-autocomplete/search-autocomplete.component";
import { CountryDataService } from "../../services/country-data.service";
import { CountrySearchStateService } from "../../services/country-search-state.service";

@Component({
  selector: 'app-country-search-engine',
  standalone: true,
  imports: [ SearchInputComponent, SearchAutocompleteComponent, HttpClientModule],
  providers: [CountryDataService, CountrySearchStateService],
  templateUrl: './country-search-engine.component.html',
  styleUrl: './country-search-engine.component.scss'
})
export class CountrySearchEngineComponent implements OnInit {
  inputValue = "";
  allCountries: CountryElement[] = [];
  filteredCountries: CountryElement[] = [];
  private readonly urlFragment = "https://www.google.com/search?q=";

  constructor(private countryDataService: CountryDataService, private countrySearchStateService: CountrySearchStateService) {}

  ngOnInit(): void {
    this.countryDataService.httpGetData().subscribe(countries => {
      this.allCountries = countries;
    });
  }

  onSubmitted(): void {
    const tmp: CountrySearched = this.createUniqueSearchedCountry(this.inputValue);
    this.countrySearchStateService.onSubmitted(tmp);
    this.redirectToGoogle();
  }

  onSearchBarInputChanged(searchString: string): void {
    this.inputValue = searchString;
    this.filteredCountries = this.getFilteredCountries(this.inputValue);
  }

  onAutocompleteElementSelected(labelElement: string): void {
    this.inputValue = labelElement;
    const tmp: CountrySearched = this.createUniqueSearchedCountry(this.inputValue);
    this.countrySearchStateService.onSubmitted(tmp);
    this.redirectToGoogle();
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
    const searchRedirectWithQuery: string = this.urlFragment + this.inputValue;
    window.location.href = searchRedirectWithQuery;
  }
}
