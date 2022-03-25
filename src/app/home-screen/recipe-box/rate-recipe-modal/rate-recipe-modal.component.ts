import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-rate-recipe-modal',
  templateUrl: './rate-recipe-modal.component.html',
  styleUrls: ['./rate-recipe-modal.component.css']
})
export class RateRecipeModalComponent implements OnInit {

  numberOfStars = Array(5).fill(0).map((x,i)=>i);


  constructor(private element: ElementRef) { }

  inside = false;

  @HostListener("click")
  clicked(event: Event) {

  }





  ngOnInit(): void {
  }


}
