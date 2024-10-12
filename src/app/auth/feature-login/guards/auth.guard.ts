import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { UserStateService } from "../../../users/feature-create-user/services/user-state.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private userStateService: UserStateService, private router: Router) {}

  canActivate(): boolean {
    const userIsLoggedIn = this.userStateService.isUserLoggedIn();
    if (!userIsLoggedIn) {
      this.router.navigate(["/login"]);
      return false;
    }
    return true;
  }
}
