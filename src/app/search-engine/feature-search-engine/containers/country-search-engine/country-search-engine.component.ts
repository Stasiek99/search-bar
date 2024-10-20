import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { NgIf } from "@angular/common";

import { MatSnackBar } from "@angular/material/snack-bar";

import { CountryElement } from "../../interfaces/country-element.interface";
import { CountrySearched } from "../../../feature-search-result-list/interfaces/country-searched.interface";
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { SearchAutocompleteComponent } from "../../components/search-autocomplete/search-autocomplete.component";
import { SnackbarSearchAutocompleteErrorComponent } from "../../components/snackbar/snackbar-search-autocomplete-error.component";
import { CountryDataService } from "../../services/country-data.service";
import { CountrySearchStateService } from "../../../feature-search-result-list/services/country-search-state.service";
import { SortSelectComponent } from "../../components/sort-select/sort-select.component";

@Component({
  selector: 'app-country-search-engine',
  standalone: true,
  imports: [SearchInputComponent, SearchAutocompleteComponent, HttpClientModule, NgIf, SortSelectComponent],
  providers: [CountryDataService, CountrySearchStateService],
  templateUrl: './country-search-engine.component.html',
  styleUrl: './country-search-engine.component.scss'
})
export class CountrySearchEngineComponent implements OnInit {
  inputValue = "";
  allCountries: CountryElement[] = [];
  filteredCountries: CountryElement[] = [];
  durationInSeconds = 10;
  errorMessage: string | null = null;
  private readonly urlFragment = "https://www.google.com/search?q=";

  constructor(private countryDataService: CountryDataService, private countrySearchStateService: CountrySearchStateService, private _snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.countryDataService.httpGetData().subscribe(countries => {
      this.allCountries = countries;
    }, error => {
      this.errorMessage = error.message;
      this.openErrorSnackBar();
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
    this.filteredCountries = this.getFilteredCountries(this.inputValue);
  }

  onAutocompleteElementSelected(labelElement: string): void {
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

  openErrorSnackBar(): void {
    this._snackbar.openFromComponent(SnackbarSearchAutocompleteErrorComponent, {
      duration: this.durationInSeconds * 1000,
      data: this.errorMessage
    });
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
    const searchRedirectWithQuery: string = this.urlFragment + this.inputValue;
    window.open(searchRedirectWithQuery, "_blank");
  }
}
