import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarSearchAutocompleteErrorComponent } from './snackbar-search-autocomplete-error.component';

describe('SnackbarSearchAutocompleteErrorComponent', () => {
  let component: SnackbarSearchAutocompleteErrorComponent;
  let fixture: ComponentFixture<SnackbarSearchAutocompleteErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarSearchAutocompleteErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarSearchAutocompleteErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
