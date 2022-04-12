import { Router } from '@angular/router';
import { Component, OnInit, Output, OnDestroy, Pipe } from '@angular/core';
import { User } from 'src/app/utilities-box/interfaces/user-interface';
import { AuthenticationService } from 'src/app/utilities-box/db-interactions/authentication-service.service';

@Component({
  selector: 'app-details-section',
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.css']
})
export class DetailsSectionComponent implements OnInit {

  @Output() currentUser!: User;

  constructor(
    public router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authenticationService.userSubject$.subscribe(
      user => this.currentUser = user
    )

  }

  addRecipeButtonClick() {
    this.router.navigate(['home', 'create']);
  }

}
