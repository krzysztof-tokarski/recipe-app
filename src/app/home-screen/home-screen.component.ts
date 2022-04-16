import { ModalGeneratorService } from './../utilities-box/helpers/modal-generator.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit, OnDestroy {

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
  }

  ngOnDestroy(): void {
    localStorage.removeItem('user');
  }




}
