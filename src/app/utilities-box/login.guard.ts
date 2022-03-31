// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })

// export class LoginGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) { }

//   canActivate(route: ActivatedRouteSnapshot) {
//     return this.authService.authorized$.pipe(
//       take(1),
//       tap((isAuth) => {
//         if (isAuth) {
//           return;
//         }

//         this.router.navigate(['auth']);
//       })
//     );
//   }
// }
