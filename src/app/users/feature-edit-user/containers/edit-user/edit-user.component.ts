import { Component } from '@angular/core';

import { User } from "../../../feature-user-details/interfaces/user.interface";
import { UserStateService } from "../../../feature-create-user/services/user-state.service";
import { UserFormComponent } from "../../../../shared/ui/user-form/user-form.component";

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    UserFormComponent
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
  editedUser: User = {} as User;
  constructor(private userStateService: UserStateService) {}

  onFormSubmit(editedUser: User): void {
    this.userStateService.editLoggedInUser(editedUser);
  }
}
