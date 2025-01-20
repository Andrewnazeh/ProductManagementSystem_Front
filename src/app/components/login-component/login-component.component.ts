import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css',
})
export class LoginComponentComponent {
  errorMessage = null;
  email: string = '';
  password: string = '';
  constructor(private userService: UserService, private Router: Router) {}

  onSubmit() {
    this.userService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful!', response);
        localStorage.setItem('token', response.token);
        this.Router.navigate(['/home']);
        // Save token, redirect, or perform other actions
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        console.error('Login failed!', err);
      },
    });
  }
}
