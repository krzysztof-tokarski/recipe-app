import { LoginService } from './login-service.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoginGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot) {
    return this.loginService.authorized$.pipe(
      take(1),
      tap((isAuth: any) => {
        if (isAuth) {
          return;
        }

        this.router.navigate(['login']);
      })
    );
  }
}
