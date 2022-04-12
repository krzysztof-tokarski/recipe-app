import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
} from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AuthenticationService } from './authentication-service.service';

@Injectable({
  providedIn: 'root',
})

export class LoginGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot) {
    return this.authenticationService.authorized$.pipe(
      take(1),
      tap((isAuth: boolean) => {
        if (isAuth) {
          return;
        }

        this.router.navigate(['login']);
      })
    );
  }
}
