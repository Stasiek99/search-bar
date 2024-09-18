import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { CountryElement } from "../interfaces/country-element.interface";

@Injectable()
export class CountryDataService {
  private readonly jsonURL = "countries.json";

  constructor(private http: HttpClient) {}

  httpGetData(): Observable<CountryElement[]> {
    return this.http.get<CountryElement[]>(this.jsonURL);
  }
}
