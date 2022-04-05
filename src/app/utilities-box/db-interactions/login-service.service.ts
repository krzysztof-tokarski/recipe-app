import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserRoles } from '../interfaces/user-roles';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private authorized!: BehaviorSubject<boolean>;

  get authorized$() {
    return this.authorized.asObservable();
  }

  constructor(
    private router: Router

  ) {

    this.authorized = new BehaviorSubject(!!localStorage.getItem('user'));
  }

  public login(role: UserRoles) {
    localStorage.setItem('user', JSON.stringify({ role }));
    this.authorized.next(true);
  }

  public logout() {
    localStorage.removeItem('user');
    this.authorized.next(false);
    this.router.navigate(['login']);
  }
}


















// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { BehaviorSubject, map, Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { User } from "../interfaces/user-interface";

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   private userSubject!: any;
//   public user!: any;
//   url = "http://localhost:3000/users"

//   constructor(
//     private router: Router,
//     private httpClient: HttpClient
//   ) {
//     this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
//     this.user = this.userSubject.asObservable();
//   }

//   public get userValue(): User {
//     return this.userSubject.value;
//   }

//   login(login: any, password: any) {
//     return this.httpClient.post<User>(this.url, { login, password })
//       .pipe(map(user => {
//         // store user details and jwt token in local storage to keep user logged in between page refreshes
//         localStorage.setItem('user', JSON.stringify(user));
//         this.userSubject.next(user);
//         return user;
//       }));
//   }










//   // logout() {
//   //     // remove user from local storage and set current user to null
//   //     localStorage.removeItem('user');
//   //     this.userSubject.next(null);
//   //     this.router.navigate(['/account/login']);
//   // }

//   // register(user: User) {
//   //     return this.http.post(`${environment.apiUrl}/users/register`, user);
//   // }

//   // getAll() {
//   //     return this.http.get<User[]>(`${environment.apiUrl}/users`);
//   // }

//   // getById(id: string) {
//   //     return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
//   // }

//   // update(id, params) {
//   //     return this.http.put(`${environment.apiUrl}/users/${id}`, params)
//   //         .pipe(map(x => {
//   //             // update stored user if the logged in user updated their own record
//   //             if (id == this.userValue.id) {
//   //                 // update local storage
//   //                 const user = { ...this.userValue, ...params };
//   //                 localStorage.setItem('user', JSON.stringify(user));

//   //                 // publish updated user to subscribers
//   //                 this.userSubject.next(user);
//   //             }
//   //             return x;
//   //         }));
//   // }

//   // delete(id: string) {
//   //     return this.http.delete(`${environment.apiUrl}/users/${id}`)
//   //         .pipe(map(x => {
//   //             // auto logout if the logged in user deleted their own record
//   //             if (id == this.userValue.id) {
//   //                 this.logout();
//   //             }
//   //             return x;
//   //         }));
//   // }
// }

