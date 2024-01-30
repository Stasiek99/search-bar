import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { CountryElement } from "./interfaces/country-element.interface";
import { CountryDataService } from "./country-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  private readonly urlFragment = "https://www.google.com/search?q=";

  inputValue: string = '';
  allCountries: CountryElement[] = [];
  filteredCountries: CountryElement[] = [];

  constructor(private http: HttpClient, private countryDataService: CountryDataService) {
  }

  ngOnInit(): void {
    this.countryDataService.httpGetData()
      .subscribe(countries => {
        this.allCountries = countries;
      });
  }

  onChangesSearchBarInput(searchString: string): void {
    this.filteredCountries = this.getFilteredCountries(searchString);
  }

  onSelectAutoCompleteElements(labelElement: string): void {
    this.inputValue = labelElement;
    this.redirectToGoogle()
  }

  onSubmit(): void {
    this.redirectToGoogle();
  }

  private redirectToGoogle(): void {
    const searchRedirectUrlWithQuery: string = this.urlFragment + this.inputValue;
    window.location.href = searchRedirectUrlWithQuery;
  }

  private getFilteredCountries(searchString: string): CountryElement[] {
    return this.allCountries.filter(elem => elem.name.toLowerCase().includes(searchString.toLowerCase()));
  }

}
