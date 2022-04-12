import { AuthenticationService } from './../utilities-box/db-interactions/authentication-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  public logged: boolean = false;


  logout() {
    this.authenticationService.logout();
  }

  ngOnInit(): void {
    this.authenticationService.authorized$.subscribe(response =>
      this.logged = response
    );
  }

}
