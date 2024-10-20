import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatOption, MatSelect } from "@angular/material/select";

import { CountryElement } from "../../interfaces/country-element.interface";
import { CountryDataService } from "../../services/country-data.service";
import {SortSelectComponent} from "../sort-select/sort-select.component";

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelect,
    MatOption,
    SortSelectComponent
  ],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  @Input() inputValue!: string;
  @Input() filteredCountries: CountryElement | null = null;
  @Output() searchBarChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() submitEvent: EventEmitter<any> = new EventEmitter<any>();

  selectedProperty = "name";
  filterValue = "";

  constructor(private countryDataService: CountryDataService) {}

  onFilterChange(): void {
    this.countryDataService.setFilter(this.selectedProperty, this.filterValue);
  }

  onChangeSearchBarInput(searchString: string): void {
    this.searchBarChanged.emit(searchString);
  }

  onSubmit(): void {
    this.submitEvent.emit();
  }
}
