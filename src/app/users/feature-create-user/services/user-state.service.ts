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
    this.users.push(user);
    this.userLocalStorageService.addUser(this.users);
  }

  getLastAddedUser(): User | null {
    return this.users[this.users.length - 1];
  }

  deleteLastAddedUser(): void {
    this.users.pop();
    this.userLocalStorageService.deleteLastAddedUser(this.users);
  }

  editLastAddedUser(editedUser: User): void {
    this.users.pop();
    this.users.push(editedUser);
    this.userLocalStorageService.editLastAddedUser(this.users);
  }

  getSearchedUsers(): User[] {
    return this.users;
  }
}
