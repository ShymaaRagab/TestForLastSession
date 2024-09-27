import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [{
    user_name: 'Ahmed',
    password: '123',
    role: 'user'
  }, {
    user_name: 'Mohsen',
    password: '123',
    role: 'editor'
  }, {
    user_name: 'Shaimaa',
    password: '123',
    role: 'admin'
  }
  ]
  private currentUser: any = null;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    const user = this.users.find(
      u => u.user_name === username && u.password === password
    );

    if (user) {
      this.currentUser = user;
      localStorage.setItem('user', JSON.stringify(this.currentUser));
      return true;
    }

    return false;
  }

  getUsername() {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      const username = userData.user_name;
      console.log(username); 
      return username;
    }
  }

  hasRole(role: string): boolean {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      return user.role === role;
    }
    return this.currentUser && this.currentUser.role === role;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
    this.router.navigate(['/login']); // Redirect to login page
  }

}
