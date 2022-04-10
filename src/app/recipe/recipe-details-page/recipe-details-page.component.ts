import { UrlRecipeLoaderService } from './../../utilities-box/helpers/url-recipe-loader.service';
import { CardClickService } from './../../utilities-box/helpers/card-click.service';
import { ModalGeneratorService } from './../../utilities-box/helpers/modal-generator.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../utilities-box/interfaces/recipe-interface';


@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css']
})
export class RecipeDetailsPageComponent implements OnInit {

  public recipe!: Recipe;
  // id!: number;

  constructor(
    private modalGeneratorService: ModalGeneratorService,
    private cardClickService: CardClickService,
    private router: Router,
    private urlRecipeLoaderService: UrlRecipeLoaderService
  ) { }

  getRecipe() {
    let regex = /^\/home\/recipe\/(\d+)$/

    if (this.recipe == undefined) {

      let recipeId = parseInt(this.router.url.replace("/home/recipe/", ''));
      console.log(recipeId);

      if (this.router.url.match(regex)) {
        this.urlRecipeLoaderService.replaySubject.next(recipeId);
      } else {
        console.log("xD")
      }
    }
  }


  ngOnInit(): void {
    this.cardClickService.replaySubject.subscribe(
      recipe => this.recipe = recipe
    )

    this.getRecipe()

    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.id = params['id'];
    // })

    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.recipe = params['recipe']
    // });
    // this.cardClickService.subject.subscribe((value: Recipe) => {
    //   console.log("i also work")
    //   this.recipe = value;
    // })
  }

  displayModal() {
    this.modalGeneratorService.replaySubject.next(this.recipe.id);
  }

}


  // recipe: Recipe =
  // {
  //     "id": 1,
  //     "name": "kluski z twarogiem",
  //     "preparationSteps": [
  //       "Przygotowujemy garnek wody i solimy go",
  //       "Gotujemy wodę",
  //       "Gotujemy makaron",
  //       "Do ugatowanego makaronu dodajemy twaróg"
  //     ],
  //     "ingredients": [
  //       {
  //         "name": "makaron",
  //         "quantity": "250g"
  //       },
  //       {
  //         "name": "sól",
  //         "quantity": "szczypta"
  //       },
  //       {
  //         "name": "twaróg",
  //         "quantity": "150g"
  //       }
  //     ],
  //     "rating": 4
  // }
