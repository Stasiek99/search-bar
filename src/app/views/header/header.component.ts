import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButton,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
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
    this.router.navigate(["/", "create-user"]);
  }

  goToUserPresentation(): void {
    this.router.navigate(["/", "user"]);
  }
}
