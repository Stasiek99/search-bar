import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { User } from "../interfaces/user.interface";

@Injectable()
export class UserService {
  private readonly UserUrl: string = 'assets/user.mock.json';

  constructor(private http: HttpClient) {}

  getUserData(): Observable<User> {
    return this.http.get<User>(this.UserUrl);
  }
}
