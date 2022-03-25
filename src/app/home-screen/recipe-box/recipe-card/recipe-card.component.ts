import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-interface';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})

export class RecipeCardComponent implements OnInit {

  @Input() public recipe!: any;

  constructor() { }

  ngOnInit(): void {

  }

}
