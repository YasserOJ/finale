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
      usermail : this.usermail,
      logpass : this.logpass
    };
    this.auth.authentificatec(clt).subscribe(data => {
      console.log(data);
    });
  }
}
