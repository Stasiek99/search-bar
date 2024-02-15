import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CountryElementInterface } from "../../interfaces/country-element.interface";

@Component({
  selector: 'app-search-autocomplete',
  templateUrl: './search-autocomplete.component.html',
  styleUrls: ['./search-autocomplete.component.scss']
})
export class SearchAutocompleteComponent {
  @Input() inputValue!: string;
  @Input() filteredCountries: CountryElementInterface[] | null = null;
  @Output() autoComplete: EventEmitter<string> = new EventEmitter<string>();

  onSelectAutoCompleteElements(searchString: string): void {
    this.autoComplete.emit(searchString);
  }
}
