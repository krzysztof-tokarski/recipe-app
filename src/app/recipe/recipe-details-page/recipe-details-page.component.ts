import { DbFetchService } from './../../utilities-box/db-interactions/db-fetch.service';
import { UrlRecipeLoaderService } from './../../utilities-box/helpers/url-recipe-loader.service';
import { CardClickService } from './../../utilities-box/helpers/card-click.service';
import { ModalGeneratorService } from './../../utilities-box/helpers/modal-generator.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../utilities-box/interfaces/recipe-interface';
import { map, Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css']
})
export class RecipeDetailsPageComponent implements OnInit {

  public recipe!: Recipe;
  private currentId!: number;

  constructor(
    private modalGeneratorService: ModalGeneratorService,
    private activatedRoute: ActivatedRoute,
    private dbFetchService: DbFetchService
  ) { }

  private callRecipe(id: number) {
    this.dbFetchService.fetchSingleRecipe(this.currentId)
      .pipe(
        map(value => value[0])
      ).subscribe(
        (value) => this.recipe = value
      )
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (result) => {
        this.currentId = result['id']
        this.callRecipe(this.currentId)
      }
    )

    this.modalGeneratorService.replaySubject.subscribe(
      () => this.callRecipe(this.currentId)
    )

  }

  displayModal() {
    this.modalGeneratorService.replaySubject.next(this.recipe.id);
  }
}



// getRecipe() {
  // // let regex = /^\/home\/recipe\/(\d+)$/
  // // const id = this.activatedRoute.snapshot.params['id'];
  // let id: number;
  // this.activatedRoute.params.subscribe(
  //   (result) => {
  //     id = result['id']
  //     console.log(id)
  //   }
  // )


  // // setTimeout(() => {
  // //   this.dbFetchService.fetchSingleRecipe(id).subscribe(
  // //     result => {
  // //       this.recipe = result[0]
  // //       console.log(this.recipe)
  // //     }
  // //   )
  // // }, 0)


  // // wyciaga parametr z url
  // console.log(this.activatedRoute.snapshot.params)

  // // sledzi zmiany
  // console.log(this.activatedRoute.params)

  // // if (this.recipe == undefined) {

  // //   let recipeId = parseInt(this.router.url.replace("/home/recipe/", ''));

  // //   if (this.router.url.match(regex)) {
  // //     this.urlRecipeLoaderService.replaySubject.next(recipeId);
  // //   }
  // // }
// }
