import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private router: Router) {
  }

  goToHome(): void {
    this.router.navigate(["/", "home"]);
  }

  goToSearchBar(): void {
    this.router.navigate(["/", "search-bar"]);
  }
}
