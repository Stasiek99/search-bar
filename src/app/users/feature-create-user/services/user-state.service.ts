import { Injectable } from "@angular/core";

import { User } from "../../feature-user-details/interfaces/user.interface";
import { UserLocalStorageService } from "./user-local-storage.service";

@Injectable({
  providedIn: "root",
})
export class UserStateService {
  private readonly users: User[];
  private readonly defaultValue = [];

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
    if (login === "admin" && password === "admin") {
      const adminUser: User = { login: "admin", password: "admin", name: "Admin", country: "N/A", age: 1, role: "admin" };
      this.userLocalStorageService.setLoggedInUser(adminUser);
      return true;
    }

    const userExists = this.checkIfUserExists(login, password);
    if (userExists) {
      const loggedInUser = this.users.find(u => u.login === login && u.password === password) || null;
      if (loggedInUser) {
        this.userLocalStorageService.setLoggedInUser(loggedInUser);
      }
      return true;
    }
    return false;
  }

  logoutUser(): void {
    this.userLocalStorageService.clearLoggedInUser();
  }

  isUserAdmin(): boolean {
    const loggedInUser = this.userLocalStorageService.getLoggedInUser();
    return loggedInUser?.role === "admin";
  }

  isUserLoggedIn(): boolean {
    return this.userLocalStorageService.getLoggedInUser() !== null;
  }

  getLoggedInUser(): User | null {
    return this.userLocalStorageService.getLoggedInUser();
  }

  editLoggedInUser(editedUser: User): void {
    if (this.isUserLoggedIn()) {
      this.userLocalStorageService.editUser(editedUser);
      this.userLocalStorageService.setLoggedInUser(editedUser);
    }
  }

  deleteLoggedInUser(): void {
    const loggedInUser = this.getLoggedInUser();
    if (loggedInUser) {
      this.userLocalStorageService.deleteUser(loggedInUser);
      this.logoutUser();
    }
  }

  getUsers(): User[] {
    return this.users;
  }

  private checkIfUserExists(login: string, password: string): boolean {
    return this.userLocalStorageService.checkIfUserExist(login, password);
  }
}
