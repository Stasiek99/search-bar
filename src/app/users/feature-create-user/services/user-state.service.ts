import { Injectable } from "@angular/core";

import { User } from "../../feature-user-details/interfaces/user.interface";
import { UserLocalStorageService } from "./user-local-storage.service";

@Injectable({
  providedIn: "root",
})
export class UserStateService {
  private readonly users: User[];
  private readonly defaultValue = [];
  private loggedInUser: User | null = null;

  constructor(private userLocalStorageService: UserLocalStorageService) {
    const tmp: User[] | null = this.userLocalStorageService.getUsers();
    this.users = tmp ?? this.defaultValue;
  }

  addUser(user: User): void {
    user.role = "user";
    this.users.push(user);
    this.userLocalStorageService.addUser(this.users);
  }

  loginUser(login: string, password: string): boolean {
    const userExists = this.checkIfUserExists(login, password);
    if (userExists) {
      this.loggedInUser = this.users.find(user => user.login === login && user.password === password) || null;
      return true;
    }
    return false
  }

  logoutUser(): void {
    this.loggedInUser = null;
  }

  isUserAdmin(): boolean {
    return this.loggedInUser?.role === "admin";
  }

  isUserLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  private checkIfUserExists(login: string, password: string): boolean {
    return this.userLocalStorageService.checkIfUserExist(login, password);
  }

  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }

  ///////TODO: Refactor code below

  getLastAddedUser(): User | null {
    return this.users[this.users.length - 1];
  }

  deleteLastAddedUser(): void {
    this.users.pop();
    this.userLocalStorageService.deleteLastAddedUser(this.users);
  }

  editLastAddedUser(editedUser: User): void {
    this.users[this.getLastUserIndex()] = editedUser;
    this.userLocalStorageService.editLastAddedUser(this.users);
  }

  getUsers(): User[] {
    return this.users;
  }

  private getLastUserIndex(): number {
    return this.users.length - 1;
  }
}
