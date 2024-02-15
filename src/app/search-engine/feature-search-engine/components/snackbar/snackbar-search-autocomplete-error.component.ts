import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar-search-autocomplete-error.component.html',
  styleUrls: ['./snackbar-search-autocomplete-error.component.scss']
})
export class SnackbarSearchAutocompleteErrorComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {
  }
}
