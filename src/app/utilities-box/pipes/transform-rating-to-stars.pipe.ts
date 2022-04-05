import { ComponentRef, Pipe, PipeTransform, ViewContainerRef } from '@angular/core';
import { StarComponent } from '../star/star.component'

@Pipe({
  name: 'transformRatingToStars'
})

export class TransformRatingToStarsPipe implements PipeTransform {

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  transform(rating: number) {
    this.viewContainerRef.clear();
    let diff = 5 - rating;

    if (diff == 5) {
      let component = this.viewContainerRef.createComponent(StarComponent);
      component.instance.rating = false;
      return;
    }

    for (let i = 0; i < rating; i++) {
      let component = this.viewContainerRef.createComponent(StarComponent);
      component.instance.fill = "black";
    }
    for (let j = 0; j < diff; j++) {
      let component = this.viewContainerRef.createComponent(StarComponent);
      component.instance.fill = "gray";
    }

  }
}
