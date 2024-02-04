import { Component, OnInit } from '@angular/core';

import { User } from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-presentation',
  templateUrl: './user-presentation.component.html',
  styleUrls: ['./user-presentation.component.scss']
})
export class UserPresentationComponent implements OnInit{
  user: User = {
    name: "Stasiek",
    login: "Stasiek99",
    password: "12345",
    country: "Poland",
    age: 23,
  }

ngOnInit(): void {
  console.log(this.user);
}
}
