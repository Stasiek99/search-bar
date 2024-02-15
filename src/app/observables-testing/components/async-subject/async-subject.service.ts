import { Injectable } from "@angular/core";
import { AsyncSubject } from "rxjs";

@Injectable({providedIn: "root"})
export class AsyncSubjectService {
  data:AsyncSubject<number> = new AsyncSubject<number>(); // only the last value sent to subs when the execution completed
}
