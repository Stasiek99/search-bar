import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { MatIconButton } from "@angular/material/button";

import { UserStateService } from "../../../../users/feature-create-user/services/user-state.service";
import {MatIcon} from "@angular/material/icon";


@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  constructor(private userStateService: UserStateService, private router: Router) {}

  logout(): void {
    this.userStateService.logoutUser();
    this.router.navigate(["/login"]);
  }
}
