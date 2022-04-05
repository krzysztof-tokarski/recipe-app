import { UserRoles } from './../interfaces/user-roles';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../db-interactions/login-service.service';

@Injectable({
  providedIn: 'root',
})
export class UserProxy {
  private user = new BehaviorSubject<{ role: UserRoles } | null>(null);

  get user$() {
    return this.user.asObservable();
  }

  constructor(private loginService: LoginService) {
    this.loginService.authorized$.subscribe(() => {
      this.user.next(JSON.parse(localStorage.getItem('user') || '{}'));
    });
  }
}
