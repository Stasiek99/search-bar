import { Component } from '@angular/core';

import { listOfCountries } from "../assets/db.mock";
import { Country } from "./country.inerface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{

  private readonly urlFragment = "https://www.google.com/search?q=";

  filteredCountries: Country[] = [];
  inputValue: string = '';

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
