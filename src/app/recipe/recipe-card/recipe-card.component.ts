import { UrlRecipeLoaderService } from './../../utilities-box/helpers/url-recipe-loader.service';
import { ModalGeneratorService } from 'src/app/utilities-box/helpers/modal-generator.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardClickService } from '../../utilities-box/helpers/card-click.service';
import { Recipe } from '../../utilities-box/interfaces/recipe-interface';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})

export class RecipeCardComponent implements OnInit {

  // @Output() public clickCard = new EventEmitter();

  // recipeId!: string;

  @Input() public recipe!: Recipe;


  constructor(
    private cardClickService: CardClickService,
    private modalGeneratorService: ModalGeneratorService,
    private router: Router,
  ) {

  }

  emitCardClick() {
    this.cardClickService.replaySubject.next(this.recipe);
    this.router.navigate(['home', 'recipe', this.recipe.id]);
  }

  ngOnInit(): void {
    this.modalGeneratorService.replaySubject
      .subscribe(
        value => {
          if (value == this.recipe.id) {
            this.emitCardClick()
          }
        }
      )
    // this.recipeId = this.activatedRoute.snapshot.params['id'];

    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.recipe = params['recipe']
    // })
  }

}
