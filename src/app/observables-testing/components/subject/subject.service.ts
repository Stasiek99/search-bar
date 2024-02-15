import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: "root"})
export class SubjectService {
  data: Subject<number> = new Subject<number>(); // subject allows to publish and subscribe.
  setData(value: number): void {
    this.data.next(value);
  }
}
