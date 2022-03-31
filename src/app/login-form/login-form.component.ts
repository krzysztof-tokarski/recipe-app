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
import { LoginServiceService } from '../utilities-box/login-service.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  form!: any;
  submitted = false;
  loggedUser!: any;


  // email = new FormControl('');
  // password = new FormControl('');

  constructor(
    private formBuider: FormBuilder,
    private loginService: LoginServiceService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }


  public createForm() {
    const form = this.formBuider.group({
      login: this.formBuider.control('',Validators.compose(
        [Validators.required, Validators.minLength(6), Validators.maxLength(15)])),
      password: this.formBuider.control('', Validators.compose(
        [Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern(/123/)])
    )})

    return form;
    }


    onSubmit() {
      this.submitted = true;

      // // reset alerts on submit
      // this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      let login = this.form.value.login;
      let password =  this.form.value.password;

      let loginAttempt = {login: login, password: password};

      let found;

      this.httpClient
      .get('http://localhost:3000/users').subscribe((res: any) => {
          let users = [...res];
          found = users.find(user => user.login == loginAttempt.login && user.password == loginAttempt.password);
          if (found == undefined) {
            this.form.reset();
            setTimeout(() => {
              this.submitted = !this.submitted;
            }, 5000);
            return false;
          } else {
            return this.loggedUser = found;
          }
      })

          // users.forEach(userr => {
          //   if (userr.login == user.login && userr.password && user.password) {
          //     console.log("true")
          //     return;
          //   } else {
          //     console.log("false");
          //   }}
          // )
    };



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
}
