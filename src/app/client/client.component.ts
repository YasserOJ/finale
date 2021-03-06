import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  logout() {
    localStorage.clear();
    this.route.navigate(['/home/main']);
  }
}
