import { Component } from '@angular/core';

import { User } from "../../../user/interfaces/user.interface";
import { UserStateService } from "../../../user/services/user-state.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  editedUser: User = {} as User
  constructor(private userService: UserStateService) {
  }

  onFormSubmit(editedUser: User): void {
    this.userService.addUser(editedUser);
  }
}
