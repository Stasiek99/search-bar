import { Component } from '@angular/core';

import { UserFormComponent } from "../../../../../shared/ui/user-form/user-form.component";
import { User } from "../../../../feature-user-details/interfaces/user.interface";
import { AdminService } from "../../../services/admin.service";

@Component({
  selector: 'app-admin-edit-user',
  standalone: true,
  imports: [
    UserFormComponent
  ],
  templateUrl: './admin-edit-user.component.html',
  styleUrl: './admin-edit-user.component.scss'
})
export class AdminEditUserComponent {
  editedUser: User = {} as User;
  constructor(private adminService: AdminService) {}

  onFormSubmit(editedUser: User): void {
    this.adminService.editUser(editedUser);
  }
}
