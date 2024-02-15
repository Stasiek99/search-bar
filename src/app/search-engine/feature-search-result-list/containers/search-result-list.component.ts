import { Component, OnInit } from '@angular/core';

import { CountrySearchedInterface } from "../interfaces/country-searched.interface";
import { CountrySearchStateService } from "../services/country-search-state.service";

@Component({
  selector: 'app-search-history',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit{
  constructor(private countrySearchStateService: CountrySearchStateService) {
  }
  searchedCountries: CountrySearchedInterface[] = [];
  readonly displayedColumns: string[] = ["input", "date"];

  ngOnInit(): void {
    this.searchedCountries = this.countrySearchStateService.getSearchedCountries();
  }
}
