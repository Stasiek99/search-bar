import { Component, OnInit } from '@angular/core';

import { User } from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-presentation',
  standalone: true,
  imports: [],
  templateUrl: './user-presentation.component.html',
  styleUrl: './user-presentation.component.scss'
})
export class UserPresentationComponent implements OnInit {
  user: User = {
    name: "Stasiek",
    login: "Stasiek99",
    password: "12345",
    country: "Poland",
    age: 25
  }

  ngOnInit(): void {
    console.log(this.user);
  }
}
