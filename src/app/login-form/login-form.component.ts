import { UserProxy } from './../utilities-box/helpers/user-proxy.service';
import { User } from './../utilities-box/interfaces/user-interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { first } from 'rxjs';
import { LoginService } from '../utilities-box/db-interactions/login-service.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  form!: any;
  submitted = false;
  failed = false;

  // email = new FormControl('');
  // password = new FormControl('');

  constructor(
    private formBuider: FormBuilder,
    private httpClient: HttpClient,
    private loginService: LoginService,
    private userProxy: UserProxy,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  private handleError(error: Response | any) {
    if (error.status == 0) {
      console.log(error)
      //or whatever condition you like to put
    }
  }


  private createForm() {
    const form = this.formBuider.group({
      login: this.formBuider.control('', Validators.compose(
        [Validators.required, Validators.minLength(6), Validators.maxLength(15)])),
      password: this.formBuider.control('', Validators.compose(
        [Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern(/123/)])
      )
    })

    return form;
  }

  login(user: User) {
    this.loginService.login(user);
    this.router.navigate(['home']);
  }


  onSubmit() {



    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    let login = this.form.value.login;
    let password = this.form.value.password;
    let loginAttempt = { login: login, password: password };

    let loginUrl = `http://localhost:3000/users?login=${loginAttempt.login}&password=${loginAttempt.password}`



    this.httpClient.get<User[]>(loginUrl).
      subscribe(
        response => {
          console.log(response)
          if (response.length == 0) {
            this.form.reset();
            this.failed = !this.failed;
            setTimeout(() => {
              this.submitted = !this.submitted;
              this.failed = !this.failed;
            }, 2000)
            return;
          } else {
            if (response[0].role == "user") {
              this.loginService.login(response[0]);
              return this.router.navigate(["home"]);
            } else if (response[0].role == "creator") {
              this.loginService.login(response[0]);
              return this.router.navigate(["home/form"]);
            } else {
              return;
            }
          }
        }
      )
  }






  // this.httpClient
  //   .get('http://localhost:3000/users').subscribe((res: any) => {
  //     let users = [...res];


  //     found = users.find(user => user.login == loginAttempt.login && user.password == loginAttempt.password);
  // setTimeout(() => {


  // if (found != undefined) {
  //   this.loggedUser = found;
  //   console.log(this.loggedUser)
  //   if (this.loggedUser.role == "user") {
  //     this.loginService.login(UserRoles.User)
  //   } else {
  //     this.loginService.login(UserRoles.Creator);
  //   }
  //   return this.router.navigate(["home"]);
  // } else {
  //   this.form.reset();
  //   this.failed = !this.failed;
  //   setTimeout(() => {
  //     this.submitted = !this.submitted;
  //     this.failed = !this.failed;
  //   }, 2000);
  //   return false;
  // }
  // }, 2000)
}


  // users.forEach(userr => {
  //   if (userr.login == user.login && userr.password && user.password) {
  //     console.log("true")
  //     return;
  //   } else {
  //     console.log("false");
  //   }}
  // )



  // this.httpClient
  // .get('http://localhost:3000/users').pipe(map((res: any) =>
  //   res.json())).subscribe(res => {
  //     console.log(res);
  //   });



  // console.log(users);

  // this.loading = true;
  // this.loginService.login(this.form.login.value, this.form.password.value)
  //     .pipe(first())
  //     .subscribe({
  //         next: () => {
  //             // get return url from query parameters or default to home page
  //             // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  //             // this.router.navigateByUrl(returnUrl);
  //         },
  //         error: error => {
  //             // this.alertService.error(error);
  //             // this.loading = false;
  //         }
  //     });

