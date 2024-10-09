import { Component, OnInit } from '@angular/core';
import { NgIf } from "@angular/common";

import { CountryElement } from "../../../search-engine/feature-search-engine/interfaces/country-element.interface";
import { CountryDataService } from "../../../search-engine/feature-search-engine/services/country-data.service";

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [CountryDataService],
  templateUrl: './home.component.html',
  imports: [
    NgIf
  ],
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  countriesNames: string | null = null;
  errorOccurred = false;

  constructor(private countryDataService: CountryDataService) {}

  ngOnInit(): void {
    this.countryDataService.httpGetData().subscribe(countries => {
      this.countriesNames = this.getCountriesNames(countries);
    }, () => {
      this.errorOccurred = true;
    });
  }

  private getCountriesNames(countriesNames: CountryElement[]): string {
    return countriesNames.map((value => {
      return value.name
    })).join(" / ");
  }
}
