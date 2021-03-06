import { AuthenticationService } from './authentication-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe-interface';
import { SortingCriteria } from '../interfaces/sorting-types';
import { filter } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DbFetchService {

  private apiUrl = 'http://localhost:3000/recipes';

  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService,
  ) { }


  public fetchSingleRecipe(id: number) {

    const recipesUrl = 'http://localhost:3000/recipes';

    const recipeInsert = `?id_gte=${id}&id_lte=${id}`;

    const recipeUrl = recipesUrl + recipeInsert;

    return this.httpClient.get<Recipe[]>(recipeUrl);
  }





  public fetchRecipes(searchFieldValue?: string, sortingCriteria?: SortingCriteria) {

    let recipesUrl = 'http://localhost:3000/recipes?';

    this.authenticationService.userSubject$.pipe(
      filter((user => user.role == "creator"))
    ).subscribe(
      (creator) => {
        const creatorInsert = `?creatorId_gte=${creator.id}&creatorId_lte=${creator.id}`
        recipesUrl = recipesUrl.slice(0, -1) + creatorInsert;
      }
    )

    if (sortingCriteria) {
      var [sortingProperty, sortingOrder] = sortingCriteria;
    }

    let insert = '';

    if (!sortingCriteria && searchFieldValue) {
      insert = `&q=${searchFieldValue}`

    } else if (sortingCriteria && !searchFieldValue) {
      insert = `&_sort=${sortingProperty}&_order=${sortingOrder}`

    } else if (sortingCriteria && searchFieldValue) {
      insert = `&q=${searchFieldValue}&_sort=${sortingProperty!}&_order=${sortingOrder!}`
    }

    recipesUrl = recipesUrl + insert;

    console.log(recipesUrl)

    return this.httpClient.get<Recipe[]>(recipesUrl);
  }
}
