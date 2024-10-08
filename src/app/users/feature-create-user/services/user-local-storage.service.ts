import { Injectable } from "@angular/core";

import { User } from "../../feature-user-details/interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserLocalStorageService {
  private readonly userStorageItemKey = "List of Users";

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
}
