import { LoginService } from './login-service.service';
import { User } from './../interfaces/user-interface';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { Recipe } from '../interfaces/recipe-interface';



@Injectable({
  providedIn: 'root'
})

export class DbFetchService {

  public subject = new Subject;

  constructor(
    private httpClient: HttpClient,
    private authService: LoginService
  ) { }

  // public fetchRecipes() {
  //   let fetch = this.httpClient.get(this.recipesUrl, { observe: "response" });

  //   return fetch;
  // }



  // public fetchRecipes() {
  //   let fetch = this.httpClient.get<Recipe[]>(this.recipesUrl, { observe: "response" })
  //     .pipe(
  //       map(response => {
  //         return response.body
  //       })
  //     )
  //   return fetch;
  // }


  public fetchRecipes(searchFieldValue?: string, sortingCriteria?: any) {


    // user?: User,

    let id;

    let user = JSON.parse(localStorage.getItem('user')!);

    if (user.role == "creator") {
      id = user.id;
    }

    let recipesUrl = 'http://localhost:3000/recipes';

    if ((sortingCriteria == undefined || sortingCriteria.length < 2) && (searchFieldValue == undefined || searchFieldValue == "")) {

    } else if ((sortingCriteria == undefined || sortingCriteria.length < 2) && (searchFieldValue != undefined && searchFieldValue != "")) {
      recipesUrl = recipesUrl + `?q=${searchFieldValue}`

    } else if ((sortingCriteria.length == 2) && (searchFieldValue == undefined || searchFieldValue == "")) {
      recipesUrl = recipesUrl + `?_sort=${sortingCriteria[0]}&_order=${sortingCriteria[1]}`

    } else if ((sortingCriteria.length == 2) && (searchFieldValue != undefined && searchFieldValue != "")) {
      recipesUrl = recipesUrl + `?q=${searchFieldValue}&_sort=${sortingCriteria[0]}&_order=${sortingCriteria[1]}`
    }

    if (id) {
      recipesUrl = recipesUrl + `?&creatorId=${id}`;
    }

    // parametryzacja
    let search = this.httpClient.get<Recipe[]>(recipesUrl)

    return search;


    // if (searchFieldValue == undefined) {
    //   console.log("searchfield undefined")
    // } else {
    //   console.log(`searchfield ${searchFieldValue}`)
    // }
    // if (sortingCriteria == undefined || sortingCriteria == ['']) {
    //   console.log("sortingCriteria undefined")
    // } else {
    //   console.log(`sortingCriteria ${sortingCriteria}`)
    // }

    // if (value == undefined || value.length == 0) {
    //   this.fetchRecipes();
    //   return;
    // }

    // let recipeUrl = this.recipesUrl + `?q=${searchFieldValue}`;
    // console.log(recipeUrl);

  }







}



  // public pushRecipe(recipe: any) {
  //   let push  = this.httpClient.post<Recipe>(this.recipesUrl,recipe.value);
  //   return push;
  // }
