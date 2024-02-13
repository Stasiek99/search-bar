import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { User } from "../../interfaces/user.interface";
import { UserStateService } from "../../services/user-state.service";

@Component({
  selector: 'app-user',
  templateUrl: './user-presentation.component.html',
  styleUrls: ['./user-presentation.component.scss']
})
export class UserPresentationComponent implements OnInit{
  user: User | null = null;
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
