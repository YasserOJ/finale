import { Injectable } from '@angular/core';

@Injectable()
export class ValidationServService {
  constructor() { }
 validate_register(user) {
    return !(user.name === undefined || user.userName === undefined || user.email === undefined || user.password === undefined || user.adress === undefined || user.phone === undefined);
 }
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  validatephone(phonenumber) {
    for ( let _i = 0; _i < phonenumber.length; _i++) {
      if (phonenumber[_i] < 0 || phonenumber[_i] > 9) {
        return false;
      }
    }
    return true;
  }
  validatephnb( phone) {
    const ph = /^(00)+(\d{3}|\d{2})+(\d{8}|\d{6}|\d{7}|\d{9}|\d{10})+$/;
    return ph.test(phone);
  }
}
