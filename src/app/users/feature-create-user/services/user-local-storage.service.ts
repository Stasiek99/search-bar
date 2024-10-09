import { Injectable } from "@angular/core";

import { User } from "../../feature-user-details/interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserLocalStorageService {
  private readonly userStorageItemKey = "users_list";

  addUser(usersValue: User[]): void {
    window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(usersValue));
  }

  getUsers(): User[] | null {
    const objectToParse = window.localStorage.getItem(this.userStorageItemKey);
    return objectToParse ? JSON.parse(objectToParse) : null;
  }

  deleteLastAddedUser(newList: User[]): void {
    window.localStorage.removeItem(this.userStorageItemKey);
    window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(newList));
  }

  editLastAddedUser(editedUser: User[]): void {
    window.localStorage.removeItem(this.userStorageItemKey);
    window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(editedUser));
  }

  checkIfUserExist(login: string, password: string): boolean {
    const users = this.getUsers();
    if (users) {
      return users.some(user => user.login === login && user.password === password);
    }
    return false;
  }
}
