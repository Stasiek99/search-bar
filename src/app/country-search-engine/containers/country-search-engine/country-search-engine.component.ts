import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { CountryElement } from "../../interfaces/country-element.interface";
import { CountryDataService } from "../../services/country-data.service";
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { SearchAutocompleteComponent } from "../../components/search-autocomplete/search-autocomplete.component";

@Component({
  selector: 'app-country-search-engine',
  standalone: true,
  imports: [ SearchInputComponent, SearchAutocompleteComponent, HttpClientModule],
  providers: [CountryDataService],
  templateUrl: './country-search-engine.component.html',
  styleUrl: './country-search-engine.component.scss'
})
export class CountrySearchEngineComponent implements OnInit {
  inputValue = "";
  allCountries: CountryElement[] = [];
  filteredCountries: CountryElement[] = [];
  private readonly urlFragment = "https://www.google.com/search?q=";

  constructor(private countryDataService: CountryDataService) {}

  ngOnInit(): void {
    this.countryDataService.httpGetData().subscribe(countries => {
      this.allCountries = countries;
    });
  }

  onSubmitted(): void {
    this.redirectToGoogle();
  }

  onSearchBarInputChanged(searchString: string): void {
    this.inputValue = searchString;
    this.filteredCountries = this.getFilteredCountries(this.inputValue);
  }

  onAutocompleteElementSelected(labelElement: string): void {
    this.inputValue = labelElement;
    this.redirectToGoogle();
  }

  private getFilteredCountries(searchString: string): CountryElement[] {
    return this.allCountries.filter(elem => elem.name.toLowerCase().includes(searchString.toLowerCase()));
  }

  private redirectToGoogle(): void {
    const searchRedirectWithQuery: string = this.urlFragment + this.inputValue;
    window.location.href = searchRedirectWithQuery;
  }
}
