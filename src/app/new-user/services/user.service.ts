import { Injectable } from "@angular/core";

import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserService {
  createdUser: User | null = null;

  setUser(user: User): void {
    this.createdUser = user;
  }

  getUser(): User | null {
    return this.createdUser;
  }
}
