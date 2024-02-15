import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CountryElement } from "../../interfaces/country-element.interface";

@Component({
  selector: 'app-search-autocomplete',
  templateUrl: './search-autocomplete.component.html',
  styleUrls: ['./search-autocomplete.component.scss']
})
export class SearchAutocompleteComponent {
  @Input() inputValue!: string;
  @Input() filteredCountries: CountryElement[] | null = null;
  @Output() autoComplete: EventEmitter<string> = new EventEmitter<string>();

  onSelectAutoCompleteElements(searchString: string): void {
    this.autoComplete.emit(searchString);
  }
}
