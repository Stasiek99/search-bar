import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { CountryElementInterface } from "../interfaces/country-element.interface";

@Injectable()
export class CountryDataService {
  private readonly jsonURL: string = "http://localhost:3000/countries";

  constructor(private http: HttpClient) {
  }

  httpGetData(): Observable<CountryElementInterface[]> {
    return this.http.get<CountryElementInterface[]>(this.jsonURL);
  }
}
