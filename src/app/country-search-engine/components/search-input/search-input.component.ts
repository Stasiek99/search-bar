import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Input() inputValue!: string;
  @Input() filteredCountries!: any;
  @Output() searchBarChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  onChangeSearchBarInput(searchString: string): void {
    this.searchBarChanged.emit(searchString);
  }

  onSubmit(): void {
    this.submit.emit();
  }
}