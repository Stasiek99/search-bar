import { Component, OnInit } from '@angular/core';

import { UserStateService } from "../../services/user-state.service";
import { User } from "../../interfaces/user.interface";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  readonly displayedColumns: string[] = ["name", "login", "country", "age"];
  constructor(private userStateService: UserStateService) {
  }

  ngOnInit(): void {
    this.users = this.userStateService.getSearchedUsers();
  }
}
