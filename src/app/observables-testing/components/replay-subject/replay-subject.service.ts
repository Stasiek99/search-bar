import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Injectable({providedIn: "root"})
export class ReplaySubjectService {
  data:ReplaySubject<number> = new ReplaySubject<number>(2); //store last 2 values
}
