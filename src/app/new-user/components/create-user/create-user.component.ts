import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  onSubmit(form: NgForm): void {
    form.value;
  }
}
