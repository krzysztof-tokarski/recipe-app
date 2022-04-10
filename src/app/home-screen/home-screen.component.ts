import { ModalGeneratorService } from './../utilities-box/helpers/modal-generator.service';
import { LoginService } from './../utilities-box/db-interactions/login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  public displayModal = false;

  constructor(
    private modalGeneratorService: ModalGeneratorService
  ) { }

  getModalClick() {
    this.displayModal = !this.displayModal;
  }

  ngOnInit(): void {
    this.modalGeneratorService.replaySubject
      .subscribe(
        () => this.getModalClick()
      )

    // let background = document.querySelector("#main") as HTMLDivElement;
    // background.style.filter = "blur(10px)";
  }


}
