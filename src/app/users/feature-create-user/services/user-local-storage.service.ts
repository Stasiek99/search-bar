import { Injectable } from "@angular/core";

import { User } from "../../feature-user-details/interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserLocalStorageService {
  private readonly userStorageItemKey = "users_list";
  private readonly loggedInUserKey = "logged_in_user";

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

  deleteUser(user: User): void {
    const users = this.getUsers();
    if (users) {
      const updatedUsers = users.filter(u => u.login !== user.login);
      this.addUser(updatedUsers);
    }
  }

  editUser(updatedUser: User): void {
    const users = this.getUsers();
    if (users) {
      const userIndex = users.findIndex(u => u.login === updatedUser.login);
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedUser };
        this.addUser(users);
      }
    }
  }

  changeUserRole(user: User): void {
    const users = this.getUsers();
    if (users) {
      const userIndex = users.findIndex(u => u.login === user.login);
      if (userIndex !== -1) {
        users[userIndex].role = users[userIndex].role === "user" ? "admin" : "user";
        this.addUser(users);
      }
    }
  }

  setLoggedInUser(user: User): void {
    window.localStorage.setItem(this.loggedInUserKey, JSON.stringify(user));
  }

  getLoggedInUser(): User | null {
    const objectToParse = window.localStorage.getItem(this.loggedInUserKey);
    return objectToParse ? JSON.parse(objectToParse) : null;
  }

  clearLoggedInUser(): void {
    window.localStorage.removeItem(this.loggedInUserKey);
  }
}
