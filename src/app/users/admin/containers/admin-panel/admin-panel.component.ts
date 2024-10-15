import { Component } from '@angular/core';
import { NgIf } from "@angular/common";
import { Router } from "@angular/router";

import { MatTableModule } from "@angular/material/table";
import { MatButton } from "@angular/material/button";

import { AdminService } from "../../services/admin.service";
import { User } from "../../../feature-user-details/interfaces/user.interface";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    NgIf,
    MatTableModule,
    MatButton,
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {
  users: User[] = [];
  readonly displayedColumns: string[] = ["name", "login", "role", "actions"];

  constructor(private adminService: AdminService, private router: Router) {
    this.loadUsers();
  }

  deleteUser(user: User): void {
    this.adminService.deleteUser(user);
    this.loadUsers();
  }

  editUser(updatedUser: User): void {
    this.router.navigate(["/admin-edit-user"]);
    this.adminService.editUser(updatedUser);
    this.loadUsers();
  }

  private loadUsers(): void {
    this.users = this.adminService.getUsers() || [];
  }
}
