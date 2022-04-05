import { UserProxy } from './../helpers/user-proxy.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
} from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { UserRoles } from '../interfaces/user-roles';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private userProxy: UserProxy) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const canActivateRoles = route.data['roles'] as UserRoles[];

    return this.userProxy.user$.pipe(map(({ role }) => canActivateRoles.includes(role)), tap(canActivate => {
      if (canActivate) {
        return;
      }

      alert('Ta opcja dostepna jest dla użytkowiników o roli: ' + canActivateRoles.join(', '))
    }));
  }
}
