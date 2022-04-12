import { User } from 'src/app/utilities-box/interfaces/user-interface';
import { AuthenticationService } from './authentication-service.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe-interface';
import { SortingCriteria, SortingOrder, SortingProperty } from '../interfaces/sorting-types';


@Injectable({
  providedIn: 'root'
})

export class DbFetchService {


  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  public fetchRecipes(searchFieldValue?: string, sortingCriteria?: any) {

    let id;

    let user!: User;

    // http params

    // let params = new HttpParams({fromObject});

    // params.set("id", "5")

    // console.log(params.get("id"))

    this.authenticationService.userSubject$.subscribe(
      value => user = value
    )

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
    // let search = this.httpClient.get<Recipe[]>(recipesUrl, { params })
    let search = this.httpClient.get<Recipe[]>(recipesUrl)


    return search;

  }
}
