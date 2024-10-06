import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedUserSnackbarComponent } from './created-user-snackbar.component';

describe('CreatedUserSnackbarComponent', () => {
  let component: CreatedUserSnackbarComponent;
  let fixture: ComponentFixture<CreatedUserSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedUserSnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedUserSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
