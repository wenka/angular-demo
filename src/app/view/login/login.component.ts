import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username: null,
    password: null
  };
  warn;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    if (!this.user.username) {
      this.warn = `username must be not null !`;
      return;
    }
    if (!this.user.password) {
      this.warn = `password must be not null !`;
      return;
    }
    if ('123456' !== this.user.password) {
      this.warn = `The password is incorrect !`;
      return;
    }
    this.warn = null;
    window.localStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigate(['/main/productList']);
  }
}
