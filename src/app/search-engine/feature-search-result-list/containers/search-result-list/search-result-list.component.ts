import { Component, OnInit } from '@angular/core';
import { NgIf } from "@angular/common";

import { MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatButton } from "@angular/material/button";

import { CountrySearched } from "../../interfaces/country-searched.interface";
import { CountrySearchStateService } from "../../services/country-search-state.service";

@Component({
  selector: 'app-search-result-list',
  standalone: true,
  imports: [
    NgIf,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatCardModule,
    MatButton
  ],
  templateUrl: './search-result-list.component.html',
  styleUrl: './search-result-list.component.scss'
})
export class SearchResultListComponent implements OnInit {
  searchedCountries: CountrySearched[] = [];
  readonly displayedColumns: string[] = ["input", "date"];

  constructor(private countrySearchStateService: CountrySearchStateService) {}

  ngOnInit(): void {
    this.searchedCountries = this.countrySearchStateService.getSearchedCountries();
  }

  reSearch(search: string): void {
    this.countrySearchStateService.reSearch(search);
  }

  clearHistory(): void {
    this.countrySearchStateService.clearSearchHistory();
    this.searchedCountries = [];
  }
}
