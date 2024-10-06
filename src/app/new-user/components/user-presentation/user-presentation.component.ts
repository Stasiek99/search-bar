import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgIf } from "@angular/common";

import { MatButton } from "@angular/material/button";

import { User } from "../../interfaces/user.interface";
import { UserStateService } from "../../services/user-state.service";

@Component({
  selector: 'app-user-presentation',
  standalone: true,
  imports: [
    NgIf,
    MatButton
  ],
  templateUrl: './user-presentation.component.html',
  styleUrl: './user-presentation.component.scss'
})
export class UserPresentationComponent implements OnInit {
  user: User | null = null;
  isButtonVisible = false;

  constructor(private userStateService: UserStateService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.userStateService.getLastAddedUser();
    if (this.user) {
      this.isButtonVisible = true;
    }
  }

  deleteUser(): void {
    this.userStateService.deleteLastAddedUser();
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate(["/", "user-preview"]);
    })
  }

  redirectToEditUser(): void {
    this.router.navigate(["/", "edit-user"]);
  }

  redirectToCreateUser(): void {
    this.router.navigate(["/", "new-user"]);
  }
}
