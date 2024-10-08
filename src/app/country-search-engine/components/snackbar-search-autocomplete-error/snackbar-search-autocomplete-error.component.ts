import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";

import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-snackbar-search-autocomplete-error',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './snackbar-search-autocomplete-error.component.html',
  styleUrl: './snackbar-search-autocomplete-error.component.scss'
})
export class SnackbarSearchAutocompleteErrorComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {}
}
