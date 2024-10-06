import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import { MatButton } from "@angular/material/button";
import { MatSidenav, MatSidenavContainer } from "@angular/material/sidenav";

import { CountrySearchEngineComponent } from "./country-search-engine/containers/country-search-engine/country-search-engine.component";
import { SidenavNavigationType } from "./views/enums/sidenav-navigation.type";
import { SidenavComponent } from "./views/components/sidenav/sidenav.component";
import { HeaderComponent } from "./views/components/header/header.component";
import { FooterComponent } from "./views/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CountrySearchEngineComponent,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    MatButton,
    MatSidenav,
    MatSidenavContainer,
    SidenavComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'search_bar';
  @ViewChild("sidenav") sidenav?: MatSidenav;

  constructor(private router: Router) {}

  private readonly navigationMap: { [key in SidenavNavigationType]: string[] } = {
    [SidenavNavigationType.home]: ["/", "home"],
    [SidenavNavigationType.search_bar]: ["/", "search-bar"],
    [SidenavNavigationType.new_user]: ["/", "new-user"],
    [SidenavNavigationType.user_preview]: ["/", "user-preview"],
    [SidenavNavigationType.search_history]: ["/", "search-history"],
    [SidenavNavigationType.users_list]: ["/users-list"],
    [SidenavNavigationType.login]: ["/", "login"]
  }

  onSelectLink(routeNumber: SidenavNavigationType): void {
    this.sidenav?.toggle();
    this.onLinkSelected(routeNumber);
  }

  onMenuIconClicked(): void {
    this.sidenav?.toggle();
  }

  private onLinkSelected(sidenavNavigationType: SidenavNavigationType): void {
    this.router.navigate(this.navigationMap[sidenavNavigationType]);
  }
}
