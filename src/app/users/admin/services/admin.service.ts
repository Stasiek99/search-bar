import { Injectable } from "@angular/core";
import { UserLocalStorageService } from "../../feature-create-user/services/user-local-storage.service";

import { User } from "../../feature-user-details/interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private userLocalStorageService: UserLocalStorageService) {}

  getUsers(): User[] | null {
    return this.userLocalStorageService.getUsers();
  }

  deleteUser(user: User): void {
    this.userLocalStorageService.deleteUser(user);
  }

  editUser(updatedUser: User): void {
    this.userLocalStorageService.editUser(updatedUser);
  }
}
