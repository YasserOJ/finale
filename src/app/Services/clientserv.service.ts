import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ClientservService {
offer: any;
  constructor(private  http: HttpClient) { }
  getoffer(tag) {
    this.http.get('http://localhost:2222/Postule/bytag/' + tag, this.offer).map(res => (<any>res));
  }

}
