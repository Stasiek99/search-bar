import { Component, OnInit } from '@angular/core';

import { User } from "../../interfaces/user.interface";
import { NgIf } from "@angular/common";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user-presentation',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user-presentation.component.html',
  styleUrl: './user-presentation.component.scss'
})
export class UserPresentationComponent implements OnInit {
  user: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser() as User;
    console.log(this.user);
  }
}
