import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CountryElementInterface } from "../../interfaces/country-element.interface";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Input() inputValue!: string;
  @Input() filteredCountries: CountryElementInterface | null = null;
  @Output() searchBarChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() submitEvent: EventEmitter<any> = new EventEmitter<any>();

  onChangeSearchBarInput(searchString: string): void {
    this.searchBarChanged.emit(searchString);
  }

  onSubmit(): void {
    this.submitEvent.emit();
  }
}
