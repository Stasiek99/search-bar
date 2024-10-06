import { Component, OnInit } from '@angular/core';

import { CountryElement } from "../../../country-search-engine/interfaces/country-element.interface";
import { CountryDataService } from "../../../country-search-engine/services/country-data.service";

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [ CountryDataService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private allCountries: CountryElement[] = [];
  countriesNames = "";

  constructor(private countryDataService: CountryDataService) {}

  ngOnInit(): void {
    this.countryDataService.httpGetData().subscribe(countries => {
      this.allCountries = countries;
      this.countriesNames = this.allCountries.map((value => {
        return `${value.name}`
      })).toString();
    });
  }
}
