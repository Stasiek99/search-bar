import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { CountrySearchEngineComponent } from "./country-search-engine/containers/country-search-engine/country-search-engine.component";
import { HeaderComponent } from "./views/header/header.component";
import { FooterComponent } from "./views/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CountrySearchEngineComponent, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'search_bar';

  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(["/", "home"]);
  }

  goToSearchBar(): void {
    this.router.navigate(["/", "search-bar"]);
  }

  goToCreateUser(): void {
    this.router.navigate(["/", "create-user"]);
  }

  goToUserPresentation(): void {
    this.router.navigate(["/", "user"]);
  }
}
