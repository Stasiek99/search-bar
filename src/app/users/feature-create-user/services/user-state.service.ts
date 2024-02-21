import { Injectable } from "@angular/core";

import { UserInterface } from "../../feature-user-details/interfaces/user.interface";
import { UserLocalStorageService } from "./user-local-storage.service";

@Injectable({
  providedIn: "root"
})

export class UserStateService {
  private readonly users: UserInterface[];
  private readonly defaultValue = [];

  constructor(private userLocalStorageService: UserLocalStorageService) {
    const tmp: UserInterface[] | null = this.userLocalStorageService.getUsers();
    this.users = tmp ?? this.defaultValue;
  }

  addUser(user: UserInterface): void {
    this.users.push(user);
    this.userLocalStorageService.addUser(this.users);
  }

  getLastAddedUser(): UserInterface | null {
    return this.users[this.users.length - 1];
  }

  deleteLastAddedUser(): void {
    this.users.pop();
    this.userLocalStorageService.deleteLastAddedUser(this.users);
  }

  editLastAddedUser(editedUser: UserInterface): void {
    this.users[this.getLastUserIndex()] = editedUser;
    this.userLocalStorageService.editLastAddedUser(this.users);
  }

  getSearchedUsers(): UserInterface[] {
    return this.users;
  }

  private getLastUserIndex(): number {
    return this.users.length - 1;
  }
}
