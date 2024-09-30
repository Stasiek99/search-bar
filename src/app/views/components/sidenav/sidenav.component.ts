import { Component, EventEmitter, Output } from '@angular/core';

import { MatIcon } from "@angular/material/icon";

import { SidenavNavigationType } from "../../enums/sidenav-navigation.type";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  readonly SidenavNavigationType = SidenavNavigationType;
  @Output() sidenavRoute: EventEmitter<SidenavNavigationType> = new EventEmitter<SidenavNavigationType>();

  onSelectLink(routeNumber: SidenavNavigationType): void {
    this.sidenavRoute.emit(routeNumber);
  }
}
