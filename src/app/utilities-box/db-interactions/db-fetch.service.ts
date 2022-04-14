import { User } from 'src/app/utilities-box/interfaces/user-interface';
import { AuthenticationService } from './authentication-service.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe-interface';
import { SortingCriteria, SortingOrder, SortingProperty } from '../interfaces/sorting-types';
import { filter, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DbFetchService {

  private apiUrl = 'http://localhost:3000/recipes';

  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService,
  ) { }

  public fetchRecipes(searchFieldValue?: string | undefined, sortingCriteria?: SortingCriteria) {

    let recipesUrl = 'http://localhost:3000/recipes';
    let creatorId;

    this.authenticationService.userSubject$.pipe(
      filter((user => user.role == "creator"))
    ).subscribe(
      user => creatorId = user.id
    )



    if ((sortingCriteria == undefined || sortingCriteria.length < 2) && (searchFieldValue == undefined || searchFieldValue == "")) {

    } else if ((sortingCriteria == undefined || sortingCriteria.length < 2) && (searchFieldValue != undefined && searchFieldValue != "")) {
      recipesUrl = recipesUrl + `?q=${searchFieldValue}`

    } else if ((sortingCriteria && sortingCriteria.length == 2) && (searchFieldValue == undefined || searchFieldValue == "")) {
      recipesUrl = recipesUrl + `?_sort=${sortingCriteria}&_order=${sortingCriteria[1]}`

    } else if ((sortingCriteria!.length == 2) && (searchFieldValue != undefined && searchFieldValue != "")) {
      recipesUrl = recipesUrl + `?q=${searchFieldValue}&_sort=${sortingCriteria![0]}&_order=${sortingCriteria![1]}`
    }

    // do poprawy ta sciezka
    if (creatorId) {
      recipesUrl = recipesUrl + `?&creatorId=${creatorId}`;
    }

    // parametryzacja
    // let search = this.httpClient.get<Recipe[]>(recipesUrl, { params })
    let search = this.httpClient.get<Recipe[]>(recipesUrl)

    console.log(recipesUrl)


    return search;

  }
}
