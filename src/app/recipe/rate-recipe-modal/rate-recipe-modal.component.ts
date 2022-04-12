import { ModalGeneratorService } from './../../utilities-box/helpers/modal-generator.service';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewEncapsulation, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-rate-recipe-modal',
  templateUrl: './rate-recipe-modal.component.html',
  styleUrls: ['./rate-recipe-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RateRecipeModalComponent implements OnInit {

  rating!: number;
  recipeId!: number | null;
  counter: number = 0;

  @Output() height = "60px";
  @Output() width = "70px";

  constructor(
    private httpClient: HttpClient,
    private modalGeneratorService: ModalGeneratorService,
    private elementRef: ElementRef
  ) { }

  @HostListener('document:click', ['$event'])
  clickout(event: { target: any; }) {
    if (this.counter == 0) {
      this.counter++;
    } else {
      if (this.elementRef.nativeElement.contains(event.target)) {
      } else {
        this.makeMeDisappear();
      }
    }
  }

  onStarClick(value: number) {
    this.rating = value;
  }

  makeMeDisappear() {
    this.modalGeneratorService.replaySubject.next(this.recipeId);
  }

  onSubmit() {
    this.httpClient
      .patch(`http://localhost:3000/recipes/${this.recipeId}`, { "rating": this.rating }).subscribe(
        () => this.makeMeDisappear()
      )
  }

  ngOnInit(): void {
    this.modalGeneratorService.replaySubject.subscribe(
      id => this.recipeId = id
    )
  }
}
