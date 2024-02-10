import { Component, OnInit } from '@angular/core';

import { CountrySearched } from "../../interfaces/country-searched.interface";
import { CountrySearchStateService } from "../../services/country-search-state.service";

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent implements OnInit{
  constructor(private countrySearchStateService: CountrySearchStateService) {
  }
  searchedCountries: CountrySearched[] = [];
  readonly displayedColumns: string[] = ["input", "date"];

  ngOnInit(): void {
    this.searchedCountries = this.countrySearchStateService.getSearchedCountries();
  }
}
