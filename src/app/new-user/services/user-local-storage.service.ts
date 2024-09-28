import { Injectable } from "@angular/core";

import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserLocalStorageService {
  private readonly localStorageKey = "User";

  setUser(user: User): void {
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(user));
  }

  getUser(): User | null {
    const localStorageValue = window.localStorage[this.localStorageKey];
    return localStorageValue ? JSON.parse(localStorageValue) : null;
  }

  deleteUser(): void {
    window.localStorage.removeItem(this.localStorageKey);
  }
}
