import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  @Input() inputValue!: string;
  @Input() filteredCountries!: any;
  @Output() searchBarChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() submitEvent: EventEmitter<any> = new EventEmitter<any>();

  onChangeSearchBarInput(searchString: string): void {
    this.searchBarChanged.emit(searchString);
  }

  onSubmit(): void {
    this.submitEvent.emit();
  }
}
