import { Component, OnInit } from '@angular/core';

import { CountryElement } from "../../../country-search-engine/interfaces/country-element.interface";
import { HttpClient } from "@angular/common/http";
import { CountryDataService } from "../../../country-search-engine/services/country-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  private allCountries: CountryElement[] = [];
  countriesNames: string = "";
  errorOccurred = false;
  constructor(private http: HttpClient, private countryDataService: CountryDataService) {
  }

  ngOnInit(): void {
    this.countryDataService.httpGetData()
      .subscribe(countries => {
        this.allCountries = countries;
        this.countriesNames = this.allCountries.map((value => {
          return `${value.name}`
        })).toString();
      }, error => {
        this.errorOccurred = true;
        console.log(error.message);
      });
  }
}
