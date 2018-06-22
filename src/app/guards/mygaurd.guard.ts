import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../Services/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class MygaurdGuard implements CanActivateChild {
  constructor(private rest: AuthService, private router: Router) {

  }
  canActivateChild() {
    if (this.rest.getCurrentUser() == null) {
      this.router.navigate(['/home/main']);
      return false;
    }

    return true;
  }
}
