import { Injectable } from "@angular/core";

import { UserInterface } from "../../feature-user-details/interfaces/user.interface";

@Injectable({
  providedIn: "root"
})
export class UserLocalStorageService {
  private readonly userStorageItemKey: string = "List of Users";

  addUser(usersValues: UserInterface[]): void {
    window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(usersValues));
  }

  getUsers(): UserInterface[] | null {
    const objectToParse = window.localStorage.getItem(this.userStorageItemKey);
    return objectToParse ? JSON.parse(objectToParse) : null;
  }

  deleteLastAddedUser(newList: UserInterface[]): void {
    window.localStorage.removeItem(this.userStorageItemKey);
    window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(newList));
  }

  editLastAddedUser(editedUser: UserInterface[]): void {
    window.localStorage.removeItem(this.userStorageItemKey);
    window.localStorage.setItem(this.userStorageItemKey, JSON.stringify(editedUser));
  }
}
