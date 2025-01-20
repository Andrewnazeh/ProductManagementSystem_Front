import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-register-component',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css',
})
export class RegisterComponentComponent {
  errorMessage = null;
  user = {
    name: '',
    email: '',
    password: '',
  };
  constructor(private userService: UserService, private Router: Router) {}

  onSubmit() {
    this.userService.register(this.user).subscribe({
      next: (response) => {
        console.log(response);
        this.Router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }
}
