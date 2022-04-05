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

  recipeId = 3;

  // rate = new FormControl('');


  rating!: number;
  // recipeId!: number;

  @Output() height = "60px";
  @Output() width = "70px";

  constructor(
    private httpClient: HttpClient
  ) { }

  // inside = false;

  // public rate(rating: number) {
  //   console.log('rating', rating);
  //   this.stars = this.stars.map((_, i) => rating > i);
  //   console.log('stars', this.stars);
  // }


  onClick(value: number) {
    this.rating = value;

  }

  onSubmit() {
    // this.httpClient
    //   .patch(`http://localhost:3000/recipes?id=${this.recipeId}`, [{ "rating": this.rating }]);
    // console.log(this.rating);
    let x = this.httpClient
      .patch(`http://localhost:3000/recipes/${this.recipeId}`, { "rating": this.rating });
    console.log(x);
  }

  ngOnInit(): void {
  }


}
