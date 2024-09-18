import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { JsonPipe, NgForOf } from "@angular/common";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { CountryElement } from "./interfaces/country-element.interface";
import { CountryDataService } from "./services/country-data.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgForOf, JsonPipe, HttpClientModule],
  providers: [CountryDataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'search_bar';

  private readonly urlFragment = "https://www.google.com/search?q=";

  inputValue = "";
  allCountries: CountryElement[] = [];
  filteredCountries: CountryElement[] = [];

  constructor(private http: HttpClient, private countryDataService: CountryDataService) {}

  ngOnInit(): void {
    this.countryDataService.httpGetData().subscribe(countries => {
      this.allCountries = countries;
    });
  }

  onChangesSearchBarInput(searchString: string): void {
    this.filteredCountries = this.getFilteredCountries(searchString);
  }

  onSelectAutoCompleteElements(labelElement: string): void {
    this.inputValue = labelElement;
    this.redirectToGoogle();
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
