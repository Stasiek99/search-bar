import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

import { CountrySearchStateService } from "../../feature-search-result-list/services/country-search-state.service";
import { CountryDataService } from "../services/country-data.service";
import { CountryElementInterface } from "../interfaces/country-element.interface";
import { CountrySearchedInterface } from "../../feature-search-result-list/interfaces/country-searched.interface";
import { SnackbarSearchAutocompleteErrorComponent } from "../components/snackbar/snackbar-search-autocomplete-error.component";

@Component({
  selector: 'app-country-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent implements OnInit{
  inputValue: string = "";
  allCountries: CountryElementInterface[] = [];
  filteredCountries: CountryElementInterface[] = [];
  durationInSeconds = 10;
  errorMessage: string | null = null;
  private readonly urlFragment: string = "https://www.google.com/search?q=";

  constructor(private http: HttpClient, private countryDataService: CountryDataService, private countrySearchStateService: CountrySearchStateService, private _snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.countryDataService.httpGetData()
      .subscribe(countries => {
        this.allCountries = countries;
      }, error => {
        this.errorMessage = error.message;
        this.openErrorSnackBar();
      });
  }

  onSubmitted(): void {
    if (this.inputValue.trim() !== "") {
      const tmp: CountrySearchedInterface = this.createUniqueSearchedCountry(this.inputValue);
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
    const tmp: CountrySearchedInterface = this.createUniqueSearchedCountry(this.inputValue);
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

  private getFilteredCountries(searchString: string): CountryElementInterface[] {
    return this.allCountries.filter(elem => elem.name.toLowerCase().includes(searchString.toLowerCase()));
  }

  private createUniqueSearchedCountry(input: string): CountrySearchedInterface {
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
