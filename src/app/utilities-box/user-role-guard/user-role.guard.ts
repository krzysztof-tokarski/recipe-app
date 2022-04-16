import { AuthenticationService } from 'src/app/utilities-box/db-interactions/authentication-service.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): any {

    const canActivateRoles = route.data['roles'] as any[];

    let value!: boolean;

    this.authenticationService.userSubject$.subscribe(
      (user) => {
        if (canActivateRoles.includes(user.role)) {
          return value = true;
        } else {
          return this.router.navigate(['home']);
        }
      })
    return value;
  }

}
