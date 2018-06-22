import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ClientservService {
  constructor(private  http: HttpClient) { }

}
