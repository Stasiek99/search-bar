import { Component } from '@angular/core';

import { UserInterface } from "../../feature-user-details/interfaces/user.interface";
import { UserStateService } from "../../feature-create-user/services/user-state.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  editedUser: UserInterface = {} as UserInterface
  constructor(private userService: UserStateService) {
  }

  onFormSubmit(editedUser: UserInterface): void {
    this.userService.editLastAddedUser(editedUser);
  }
}
