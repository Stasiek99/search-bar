import { Component, OnInit } from '@angular/core';

import { UserStateService } from "../../feature-create-user/services/user-state.service";
import { UserInterface } from "../../feature-user-details/interfaces/user.interface";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: UserInterface[] = [];
  readonly displayedColumns: string[] = ["name", "login", "country", "age"];
  constructor(private userStateService: UserStateService) {
  }

  ngOnInit(): void {
    this.users = this.userStateService.getSearchedUsers();
  }
}
