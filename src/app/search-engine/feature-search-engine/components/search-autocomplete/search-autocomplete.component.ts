import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

import { CountryElement } from "../../interfaces/country-element.interface";
import { CountryDataService } from "../../services/country-data.service";

@Component({
  selector: 'app-search-autocomplete',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './search-autocomplete.component.html',
  styleUrl: './search-autocomplete.component.scss'
})
export class SearchAutocompleteComponent implements OnInit {
  @Input() inputValue!: string;
  @Input() filteredCountries: CountryElement[] | null = null;
  @Output() autocomplete: EventEmitter<string> = new EventEmitter<string>();

  countries: any[] = [];
  noResults = false;

  constructor(private countryDataService: CountryDataService) {}

  ngOnInit(): void {
    this.countryDataService.countries$.subscribe((data) => {
      this.countries = data;
      this.noResults = data.length === 0;
    })
  }

  onSelectAutoCompleteElement(searchString: string): void {
    this.autocomplete.emit(searchString);
  }
}
