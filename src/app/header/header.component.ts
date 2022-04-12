import { Observable } from 'rxjs';
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

  // public logged: boolean = false;

  public loggedObservable = this.authenticationService.authorized$;

  logout() {
    this.authenticationService.logout();
  }

  ngOnInit(): void {
    // async pipe, przypisanie observable do zmiennej

  }

}
