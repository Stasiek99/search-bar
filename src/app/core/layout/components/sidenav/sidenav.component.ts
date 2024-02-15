import { Component, EventEmitter, Output } from '@angular/core';

import { SidenavNavigationType } from "../../enums/sidenav-navigation-type";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  readonly SidenavNavigationType = SidenavNavigationType;
  @Output() sidenavRoute: EventEmitter<SidenavNavigationType> = new EventEmitter<SidenavNavigationType>();

  onSelectLink(routeNumber: SidenavNavigationType): void {
    this.sidenavRoute.emit(routeNumber);
  }
}
