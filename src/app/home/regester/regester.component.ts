import { Component, OnInit } from '@angular/core';
import {ValidationServService} from '../../Services/validation-serv.service';
import {FlashMessage} from 'angular-flash-message/dist';
import {AuthService} from '../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent implements OnInit {
  cname: string;
  username: string;
  email: string;
  password: string;
  c_number: string;
  adress: string;
  phone: string;
  constructor( private validation: ValidationServService,
               private  flash: FlashMessage,
               private  auth: AuthService,
               private route: Router) { }
Register() {

  const client =  {
      cname: this.cname ,
      username: this.username,
      email: this.email,
      password: this.password,
      c_number: this.c_number,
      adress: this.adress,
      phone: this.phone
    };
  if (!this.validation.validate_register(client)) {
    this.flash.danger('Please fill the survey', {generalClass: 'success-class', timeout : 5000});
    return false;
  }
  if (!this.validation.validateEmail(client.email)) {
    this.flash.danger('\n write an adequat email', {timeout : 5000});
    return false;
  }
  this.auth.registerclient(client).subscribe(data => {
    if (data.success) {
      this.flash.success('You are now registred and can log in', {timeout : 5000});
      this.route.navigate(['home/main']);
    } else {
      this.flash.danger('Something went wrong', {timeout : 5000});
      this.route.navigate(['home/main']);
    }
  });
}
  ngOnInit() {
  }

}
