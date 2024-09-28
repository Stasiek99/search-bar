import { Injectable } from "@angular/core";

import { User } from "../interfaces/user.interface";
import { UserLocalStorageService } from "./user-local-storage.service";

@Injectable({
  providedIn: "root",
})
export class UserStateService {
  private createdUser: User | null = null;

  constructor(private userLocalStorageService: UserLocalStorageService) {
    this.createdUser = this.userLocalStorageService.getUser();
  }

  setUser(user: User): void {
    this.createdUser = user;
    this.userLocalStorageService.setUser(user);
  }

  getUser(): User | null {
    return this.createdUser;
  }

  deleteUser(): void {
    this.createdUser = null;
    this.userLocalStorageService.deleteUser();
  }
}
