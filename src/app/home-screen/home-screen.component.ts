import { LoginService } from './../utilities-box/db-interactions/login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {

    // let background = document.querySelector("#main") as HTMLDivElement;
    // background.style.filter = "blur(10px)";
  }

  logout() {
    this.loginService.logout();
  }

}
