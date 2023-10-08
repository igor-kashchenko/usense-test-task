import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';

  easyPassword = /^[A-Za-z0-9!@#$%^&*()-_=+[\]{};:'",.<>?/\\|]*$/;
  mediumPassword = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$|^(?=.*[a-zA-Z])(?=.*[^a-zA-Z]).*$|^(?=.*[!@#$%^&*()_+=-])(?=.*\d)[!@#$%^&*()_+=-\d]+$/
  strongPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:<>?~-]).+$/;


  isPasswordEmpty() {
    return this.password.length === 0;
  }

  isPasswordLongEnough() {
    return this.password.length > 7;
  }

  sanitizePassword() {
    this.password = this.password.replace(/\s+/g, "");
  }

  getPasswordStrength() {
    if (!this.isPasswordLongEnough()) {
      return 'Invalid';
    }

    switch (true) {
      case this.strongPassword.test(this.password):
        return 'Strong';
      case this.mediumPassword.test(this.password):
        return 'Medium';
      case this.easyPassword.test(this.password):
        return 'Easy';
      default:
        return;
    }
  }
}
