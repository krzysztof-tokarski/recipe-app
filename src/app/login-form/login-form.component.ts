import { User } from './../utilities-box/interfaces/user-interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../utilities-box/db-interactions/authentication-service.service';
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

  constructor(
    private formBuider: FormBuilder,
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
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
    this.authenticationService.login(user);
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
          if (response.length == 0) {
            this.form.reset();
            this.failed = !this.failed;
            setTimeout(() => {
              this.submitted = !this.submitted;
              this.failed = !this.failed;
            }, 2000)
            return;
          } else {
            let user = response[0];
            if (user.role == "user") {
              this.authenticationService.login(user);
              return this.router.navigate(["home"]);
            } else if (user.role == "creator") {
              this.authenticationService.login(user);
              return this.router.navigate(["home/create"]);
            } else {
              return;
            }
          }
        }
      )
  }
}
