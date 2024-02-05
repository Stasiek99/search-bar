import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  goToHome(): void {
    this.router.navigate(["/", "home"]);
  }

  goToSearchBar(): void {
    this.router.navigate(["/", "search-bar"]);
  }

  goToCrateUser(): void {
    this.router.navigate(["/", "create-new-user"]);
  }

  goToUserPresentation(): void {
    this.router.navigate(["/", "user"]);
  }
}
