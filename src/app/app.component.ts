import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { listOfCountries } from "../assets/db.mock";
import { Country } from "./country.inerface";

export interface JSONCountry {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  private readonly jsonUrl = "assets/countries.json";
  private readonly urlFragment = "https://www.google.com/search?q=";

  filteredCountries: Country[] = [];
  inputValue: string = '';
  jsonCountries: JSONCountry[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<(JSONCountry)[]>(this.jsonUrl)
      .subscribe(countries => {
        console.log(countries);
        this.jsonCountries = countries;
      });
  }

  onChangesSearchBarInput(searchString: string){
    this.filteredCountries = this.getFilteredCountries(searchString);
  }

  onSelectAutoCompleteElements(labelElement: string): void{
    this.inputValue = labelElement;
    this.redirectToGoogle()
  }

  onSubmit(): void{
    this.redirectToGoogle();
  }

  private redirectToGoogle(): void{
    const searchRedirectUrlWithQuery: string = this.urlFragment + this.inputValue;
    window.location.href = searchRedirectUrlWithQuery;
  }

  private getFilteredCountries(searchString: string){
    return listOfCountries.filter(elem => elem.label.includes(searchString));
  }

}
