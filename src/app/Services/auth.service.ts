import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  url: any = 'http://localhost:2222';
  client: any;

  constructor( public http: HttpClient) { }

  registerclient(client) {
    const headers = new  HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:2222/Client/register', client, { headers: headers}).map(res => (<any>res));
  }
  authentificatec(client) {
    const headers = new  HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:2222/Client/loginv2', client, { headers: headers}).map(res => (<any>res));
  }
  getCurrentUser()  {

    return localStorage.getItem('client');
  }

}
