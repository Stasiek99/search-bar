import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Country } from "./interfaces/country.interface";
import { listOfCountries } from "../assets/db.mock";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'search_bar';

  private readonly urlFragment = "https://www.google.com/search?q=";

  filteredCountries: Country[] = [];
  inputValue = "";

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
