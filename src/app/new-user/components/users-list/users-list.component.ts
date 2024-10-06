import { Component, OnInit } from '@angular/core';

import { UserStateService } from "../../services/user-state.service";
import { User } from "../../interfaces/user.interface";
import {NgIf} from "@angular/common";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    NgIf,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  readonly displayedColumns: string[] = ["name", "login", "country", "age"];

  constructor(private userStateService: UserStateService) {}

  ngOnInit(): void {
    this.users = this.userStateService.getSearchedUsers();
  }
}
