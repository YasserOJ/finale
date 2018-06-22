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
  name: string;
  userName: string;
  email: string;
  password: string;
  contractNumber: string;
  adress: string;
  phone: string;
  country = '';
  field = '';
  constructor( private validation: ValidationServService,
               private  flash: FlashMessage,
               private  auth: AuthService,
               private route: Router) { }
Register() {
  const client =  {
      name: this.name ,
      userName: this.userName,
      email: this.email,
      password: this.password,
      contractNnumber: this.contractNumber,
      adress: this.adress,
      phone: this.phone,
      country: this.country,
      field: this.field
    };
  console.log(client);
  if (!this.validation.validate_register(client)) {
    this.flash.danger('Please fill the survey', {timeout : 5000});
    return false;
  }
  if (!this.validation.validateEmail(client.email)) {
    this.flash.danger('write a valid email', {timeout : 5000});
    return false;
  }
  if (!this.validation.validatephnb(client.phone)) {
    this.flash.danger('write a valid phone number', {timeout : 5000});
    return false;
  }
  this.auth.registerclient(client).subscribe((data) => {
    if (data.success === false ) {
      this.flash.danger(data.msg, {timeout : 5000});
    } else {
      this.flash.success (data.msg, {timeout : 5000});
      this.route.navigate(['/home']);
    }
    }
      , (error) => {
      this.flash.danger('Something went wrong', {timeout : 5000});
      this.route.navigate(['/home']);
    }
  );
}
  ngOnInit() {
  }

}
