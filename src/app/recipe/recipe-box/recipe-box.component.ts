import { SortingCriteria } from 'src/app/utilities-box/interfaces/sorting-types';
import { FormClickerService } from './../../utilities-box/helpers/form-clicker.service';
import { Component, Input, OnInit } from '@angular/core';
import { DbFetchService } from '../../utilities-box/db-interactions/db-fetch.service';
import { Recipe } from '../../utilities-box/interfaces/recipe-interface';
import { ModalGeneratorService } from 'src/app/utilities-box/helpers/modal-generator.service';



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
    }, 0)
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
