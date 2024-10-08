import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf } from "@angular/common";

import { CountryElement } from "../../interfaces/country-element.interface";

@Component({
  selector: 'app-search-autocomplete',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './search-autocomplete.component.html',
  styleUrl: './search-autocomplete.component.scss'
})
export class SearchAutocompleteComponent {
  @Input() inputValue!: string;
  @Input() filteredCountries: CountryElement[] | null = null;
  @Output() autocomplete: EventEmitter<string> = new EventEmitter<string>();

  onSelectAutoCompleteElement(searchString: string): void {
    this.autocomplete.emit(searchString);
  }
}
