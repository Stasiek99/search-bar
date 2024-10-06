import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-created-user-snackbar',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './created-user-snackbar.component.html',
  styleUrl: './created-user-snackbar.component.scss'
})
export class CreatedUserSnackbarComponent {

}
