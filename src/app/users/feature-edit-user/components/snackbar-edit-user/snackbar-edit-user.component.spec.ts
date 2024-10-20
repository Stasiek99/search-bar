import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarEditUserComponent } from './snackbar-edit-user.component';

describe('SnackbarEditUserComponent', () => {
  let component: SnackbarEditUserComponent;
  let fixture: ComponentFixture<SnackbarEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarEditUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
