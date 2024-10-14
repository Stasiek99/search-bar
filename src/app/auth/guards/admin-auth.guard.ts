import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { UserStateService } from "../../users/feature-create-user/services/user-state.service";

@Injectable({
  providedIn: "root",
})
export class AdminAuthGuard implements CanActivate {
  constructor(private userStateService: UserStateService, private router: Router) {}

  canActivate(): boolean {
    if (this.userStateService.isUserAdmin()) {
      console.log("true");
      return true;
    } else {
      this.router.navigate(["/home"]);
      console.log("false")
      return false;
    }
  }
}
