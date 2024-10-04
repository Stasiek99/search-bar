import { Component, OnInit } from '@angular/core';
import { NgIf } from "@angular/common";

import { MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable } from "@angular/material/table";

import { CountrySearched } from "../../interfaces/country-searched.interface";
import { CountrySearchStateService } from "../../services/country-search-state.service";

@Component({
  selector: 'app-search-history',
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
    MatRowDef
  ],
  templateUrl: './search-history.component.html',
  styleUrl: './search-history.component.scss'
})
export class SearchHistoryComponent implements OnInit {
  constructor(private countrySearchStateService: CountrySearchStateService) {}

  searchedCountries: CountrySearched[] = [];
  readonly displayedColumns: string[] = ["input", "date"];

  ngOnInit(): void {
    this.searchedCountries = this.countrySearchStateService.getSearchedCountries();
  }
}
