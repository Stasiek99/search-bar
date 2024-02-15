import { Injectable } from "@angular/core";

import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root"
})
export class UserLocalStorageService {
  private readonly userStorageItemKey: string = "List of Users";

  addUser(usersValues: User[]): void {
    window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(usersValues));
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
