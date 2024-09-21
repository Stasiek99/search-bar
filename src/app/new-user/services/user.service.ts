import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from "../interfaces/user.interface";

@Injectable()
export class UserService {
  private readonly userURL: string = "user.mock.json";

  constructor(private http: HttpClient) {}

  getUserData(): Observable<User> {
    return this.http.get<User>(this.userURL);
  }
}
