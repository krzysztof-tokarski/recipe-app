import { SortingCriteria } from 'src/app/utilities-box/interfaces/sorting-types';
import { Router } from '@angular/router';
import { CardClickService } from './../../utilities-box/helpers/card-click.service';
import { FormClickerService } from './../../utilities-box/helpers/form-clicker.service';
import { Component, Input, OnInit } from '@angular/core';
import { DbFetchService } from '../../utilities-box/db-interactions/db-fetch.service';
import { Recipe } from '../../utilities-box/interfaces/recipe-interface';
import { ModalGeneratorService } from 'src/app/utilities-box/helpers/modal-generator.service';
import { UrlRecipeLoaderService } from 'src/app/utilities-box/helpers/url-recipe-loader.service';



@Component({
  selector: 'app-recipe-box',
  templateUrl: './recipe-box.component.html',
  styleUrls: ['./recipe-box.component.css']
})


export class RecipeBoxComponent implements OnInit {

  private _sortCriteria!: SortingCriteria;
  private _searchFieldValue!: string | undefined;

  private callRecipes() {
    setTimeout(() => {
      this.dbFetchService$.fetchRecipes(this._searchFieldValue, this._sortCriteria).subscribe((res) => {
        this.recipesArray = res
        console.log(this.recipesArray)
      })
    }, 200)

    // metoda na pobieranie idywidualnych z api

    setTimeout(() => {
      this.urlRecipeLoaderService.replaySubject.subscribe(id => {
        let requestedRecipe: Recipe | undefined = this.recipesArray.find(recipe => recipe.id == id);
        if (requestedRecipe == undefined) {
          this.router.navigate(['home'])
        } else {
          this.cardClickService.replaySubject.next(requestedRecipe);
        }
      })
    }, 300)
  }

  @Input() set sortCriteria(value: SortingCriteria) {
    this._sortCriteria = value;
    this.callRecipes()
  }

  @Input() set searchFieldValue(value: string | undefined) {
    this._searchFieldValue = value;
    this.callRecipes()
  }

  recipesArray!: Recipe[];

  constructor(
    private dbFetchService$: DbFetchService,
    private formClickerService: FormClickerService,
    private modalGeneratorService: ModalGeneratorService,
    private urlRecipeLoaderService: UrlRecipeLoaderService,
    private cardClickService: CardClickService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.callRecipes()

    this.formClickerService.subject.subscribe(() => {
      this.callRecipes()
    })

    this.modalGeneratorService.replaySubject.subscribe(() => {
      this.callRecipes()
    })

  }

}
