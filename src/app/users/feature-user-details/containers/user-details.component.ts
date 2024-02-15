import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserInterface } from "../interfaces/user.interface";
import { UserStateService } from "../../feature-create-user/services/user-state.service";

@Component({
  selector: 'app-user',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  user: UserInterface | null = null;
  isButtonVisible: boolean = false;

  constructor(private userService: UserStateService, private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.userService.getLastAddedUser();
    if (this.user) {
      this.isButtonVisible = true;
    }
  }

  deleteUser(): void {
    this.userService.deleteLastAddedUser();
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate(["/", "user"]);
    });
  }

  redirectToEditUser(): void {
    this.router.navigate(["/", "edit-user"]);
  }

  redirectToCreateUser(): void {
    this.router.navigate(["/", "create-new-user"]);
  }
}
