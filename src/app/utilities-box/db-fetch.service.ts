import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../home-screen/recipe-box/recipe-interface';

@Injectable({
  providedIn: 'root'
})


export class DbFetchService {

  subject = new Subject;

  recipesUrl = 'http://localhost:3000/recipes';

  constructor(
    private httpClient: HttpClient
  ) { }

  public fetchRecipes() {
    let fetch = this.httpClient.get(this.recipesUrl, {observe: "response"});

    return fetch;
  }

  // public pushRecipe(recipe: any) {
  //   let push  = this.httpClient.post<Recipe>(this.recipesUrl,recipe.value);
  //   return push;
  // }

}
