import { Component, OnInit } from '@angular/core';

import { User } from "../../interfaces/user.interface";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user-presentation',
  templateUrl: './user-presentation.component.html',
  styleUrls: ['./user-presentation.component.scss']
})
export class UserPresentationComponent implements OnInit{
  user: User | null = null;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUser() as User;
    console.log(this.user);
  }
}
