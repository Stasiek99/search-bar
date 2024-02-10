import { Component, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { MatSidenav } from "@angular/material/sidenav";

import { SidenavNavigationType } from "./views/enums/sidenav-navigation-type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("sidenav") sidenav?: MatSidenav;

  constructor(private router: Router) {
  }

  private readonly navigationMap: { [key in SidenavNavigationType]: string[] } = {
    [SidenavNavigationType.home]: ["/", "home"],
    [SidenavNavigationType.search_bar]: ["/", "search-bar"],
    [SidenavNavigationType.new_user]: ["/", "create-new-user"],
    [SidenavNavigationType.user_preview]: ["/", "user"],
  }

  onSelectLink(routeNumber: SidenavNavigationType): void {
    this.sidenav!.toggle();
    this.onLinkSelected(routeNumber);
  }

  onMenuIconClicked(): void {
    this.sidenav?.toggle();
  }

  private onLinkSelected(sidenavNavigationType: SidenavNavigationType): void {
    this.router.navigate(this.navigationMap[sidenavNavigationType]);
  }
}
