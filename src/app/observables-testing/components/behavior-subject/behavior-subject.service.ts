import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: "root"})
export class BehaviorSubjectService {
 data:BehaviorSubject<number> = new BehaviorSubject<number>(100);

 setData(value: number): void {
    this.data.next(value);
 }
}
