import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { JsonPipe, NgForOf } from "@angular/common";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { Country } from "./interfaces/country.interface";
import { listOfCountries } from "../../public/db.mock";

export interface JSONCountry {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgForOf, JsonPipe, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'search_bar';

  private readonly jsonURL = "countries.json";
  private readonly urlFragment = "https://www.google.com/search?q=";

  filteredCountries: Country[] = [];
  inputValue = "";
  jsonCountries: JSONCountry[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<(JSONCountry)[]>(this.jsonURL).subscribe(countries => {
      console.log(countries);
      this.jsonCountries = countries;
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

  private getFilteredCountries(searchString: string): Country[] {
    return listOfCountries.filter(elem => elem.label.includes(searchString));
  }
}
