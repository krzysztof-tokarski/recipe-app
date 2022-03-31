import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardClickService } from 'src/app/utilities-box/card-click.service';
import { Recipe } from '../recipe-interface';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})

export class RecipeCardComponent implements OnInit {

  // @Output() public clickCard = new EventEmitter();
  @Input() public recipe!: Recipe;

  constructor(
    private cardClickService: CardClickService
    ) { }

  emitCardClick() {
    this.cardClickService.subject.next(this.recipe);
  }

  ngOnInit(): void {

  }

}
