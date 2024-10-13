import { Component } from '@angular/core';

import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatDivider
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  onIconClick (urlString: string): void {
    window.open(urlString, "_blank");
  }
}
