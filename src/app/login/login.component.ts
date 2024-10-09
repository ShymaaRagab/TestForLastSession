import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  
  password = '';
  errorMessage = '';

  constructor(private authService: UsersService, private router: Router) {}

  
  onSubmit() {
    const isAuthenticated = this.authService.login(this.username, this.password);
    
    if (isAuthenticated) {
      this.router.navigate(['/home']); 
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
