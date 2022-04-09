import { LoginService } from './../utilities-box/db-interactions/login-service.service';
import { UserProxy } from './../utilities-box/helpers/user-proxy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  public logged = false;


  logout() {
    this.loginService.logout();
  }

  ngOnInit(): void {
    this.loginService.authorized$.subscribe(response =>
      this.logged = response
    );
  }

}
