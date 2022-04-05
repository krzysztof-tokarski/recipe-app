import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-rate-recipe-modal',
  templateUrl: './rate-recipe-modal.component.html',
  styleUrls: ['./rate-recipe-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RateRecipeModalComponent implements OnInit {

  // @Input() rating
  public stars = Array(5);

  ratingStarsSelector = new FormControl("");


  constructor(private element: ElementRef) { }

  // inside = false;

  public rate(rating: number) {
    console.log('rating', rating);
    this.stars = this.stars.map((_, i) => rating > i);
    console.log('stars', this.stars);
  }





  ngOnInit(): void {
  }


}
