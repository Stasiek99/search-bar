import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { CountryElement } from "../interfaces/country-element.interface";

@Injectable({
  providedIn: "root"
})
export class CountryDataService {
  private readonly jsonURL = "http://localhost:3000/countries";

  constructor(private http: HttpClient) {}

  httpGetData(): Observable<CountryElement[]> {
    return this.http.get<CountryElement[]>(this.jsonURL);
  }
}
