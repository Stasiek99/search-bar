import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from "@angular/router";

import { MatMiniFabButton } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatMiniFabButton,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() menuIconClicked: EventEmitter<void> = new EventEmitter<void>();

  onClickMenuIcon(): void {
    this.menuIconClicked.emit();
  }
}
