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

  // @ViewChild("1") starOne: ElementRef;
  // rate = new FormControl('');


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

  // inside = false;

  // public rate(rating: number) {
  //   console.log('rating', rating);
  //   this.stars = this.stars.map((_, i) => rating > i);
  //   console.log('stars', this.stars);
  // }


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
