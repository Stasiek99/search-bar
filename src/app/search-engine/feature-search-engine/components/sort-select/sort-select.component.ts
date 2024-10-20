import { Component } from '@angular/core';

import { CountryDataService } from "../../services/country-data.service";
import { FormsModule } from "@angular/forms";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatOption, MatSelect } from "@angular/material/select";

@Component({
  selector: 'app-sort-select',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelect,
    FormsModule,
    MatOption
  ],
  templateUrl: './sort-select.component.html',
  styleUrl: './sort-select.component.scss'
})
export class SortSelectComponent {
  sortOption = "";

  constructor(private countryDataService: CountryDataService) {}

  onSortChange(): void {
    this.countryDataService.setSortOption(this.sortOption);
  }
}
