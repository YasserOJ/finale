import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {Router} from '@angular/router';
import {FlashMessage} from 'angular-flash-message/dist';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
usermail: string;
logpass:  string;
  constructor(private  auth: AuthService, private route: Router, private flash: FlashMessage) { }

  ngOnInit() {
  }
  onLogin() {
    const clt = {
      userName : this.usermail,
      email: this.usermail,
      password : this.logpass
    };
    this.auth.authentificatec(clt).subscribe(data => {
      if (data.success === false ) {
        this.flash.danger(data.msg, {timeout : 5000});
      } else {
        this.flash.success (data.msg, {timeout : 5000});
        localStorage.setItem('user', JSON.stringify(data.client));
        this.route.navigate(['/client/myoffers']);
      }
    });
  }
}
