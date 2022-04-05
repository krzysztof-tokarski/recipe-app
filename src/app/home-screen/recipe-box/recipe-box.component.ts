import { FormClickerService } from './../../utilities-box/helpers/form-clicker.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { interval, of, startWith, Subscription, switchMap, map, Observable, fromEvent, mergeMap } from 'rxjs';
import { DbFetchService } from 'src/app/utilities-box/db-interactions/db-fetch.service';
import { Recipe } from '../../utilities-box/interfaces/recipe-interface';


@Component({
  selector: 'app-recipe-box',
  templateUrl: './recipe-box.component.html',
  styleUrls: ['./recipe-box.component.css']
})


export class RecipeBoxComponent implements OnInit {

  // public value$: Observable<any> = of([]);
  // subscription1$ = this.dbFetchService.fetchRecipes();
  // subscription2$ = this.dbFetchService$.searchRecipe(this.searchFieldValue, this.sortCriteria);
  // click$ = fromEvent(document,"click")

  // API_URL = 'http://localhost:3000/recipes';

  // @Input() searchField!: string;

  private _sortCriteria!: any;
  private _searchFieldValue!: string;

  // @Input() sortCriteria!: any;
  // @Input() searchFieldValue!: string;

  private callRecipes() {
    this.dbFetchService$.fetchRecipes(this._searchFieldValue, this._sortCriteria).subscribe((res) => {
      this.recipesArray = res
    }
    )
  }


  @Input() set sortCriteria(value: any) {
    this._sortCriteria = value;
    this.callRecipes()
  }

  @Input() set searchFieldValue(value: any) {
    this._searchFieldValue = value;
    this.callRecipes()
  }


  // subscription2$ =  this.dbFetchService$.searchRecipe(this.searchFieldValue, this.sortCriteria);

  // interval$ = interval(100000);
  // subscription$!: Subscription;

  recipesArray!: any;
  // recipesArray!: Recipe[];
  // recipes!: Recipe[];

  constructor(
    private dbFetchService$: DbFetchService,
    private formClickerService: FormClickerService,
    private httpClient: HttpClient
  ) { }

  // fromEvent(document, "click")
  // .pipe(
  //   switchMap(() => interval(1000))
  // )
  // .subscribe(console.log);



  // updateSearchFieldValue(value: string) {
  //   this.searchFieldValue = value;
  // }

  // updateSortCriteria(value: string[]) {
  //   this.sortCriteria = value;
  // }



  // update() {
  //   this.dbFetchService$.searchRecipe(this.searchFieldValue, this.sortCriteria)?.subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.recipesArray = res;
  //       console.log(this.recipesArray);
  //     })
  // }

  ngOnInit(): void {

    this.callRecipes()

    this.formClickerService.subject.subscribe(() => {
      this.callRecipes()
    })

    // this.subscription$ = this.interval$.pipe(
    //   startWith(0),
    //   switchMap(
    //     () =>
    //       this.dbFetchService$.searchRecipe(this.searchFieldValue, this.sortCriteria)
    //   ),
    // ).subscribe(
    //   res => this.recipesArray = res
    // )















    // this.subscription$ = this.interval$.
    //   pipe(
    //     startWith(0),
    //     switchMap(
    //       () => this.dbFetchService$.searchRecipe(this.searchFieldValue, this.sortCriteria)
    //     ),
    //   ).subscribe(
    //     res => this.recipesArray = res
    //   );



    // of(this.subscription$).subscribe(res => this.recipesArray = res.body)
    // .pipe(
    //   map((value) => this.recipesArray = value.body)
    // )
    // .pipe(
    //   fromEvent(document, "click")
    //   switchMap(() => interval(1000))
    //   )



    // this.subscription$ = this.interval$
    //   .pipe(
    //     startWith(0),
    //     switchMap(
    //       () => this.dbFetchService$.fetchRecipes()
    //     ),
    //   ).pipe(
    //     // map(response => {
    //     //   return response?.filter(recipe => recipe.name.startsWith(`${this.searchFieldValue}`))
    //     // })

    //     // map(response => {
    //     //   return response.body
    //     // })
    //     // map(response => {
    //     //   // console.log(response)
    //     // })
    //   )
    //   .subscribe(res => this.recipesArray = res);





    // this.subscription$ = this.interval$
    //   .pipe(
    //     startWith(0),
    // switchMap(
    //   () => this.dbFetchService$.searchRecipe(this.searchFieldValue, this.sortCriteria)
    // ),
    //   ).pipe(
    //     // map(response => {
    //     //   return response?.filter(recipe => recipe.name.startsWith(`${this.searchFieldValue}`))
    //     // })

    //     // map(response => {
    //     //   return response.body
    //     // })
    //     // map(response => {
    //     //   // console.log(response)
    //     // })
    //   )
    //   .subscribe(res => this.recipesArray = res);







    // this.dbFetchService.fetchRecipes().subscribe((fetch: Recipe[]) => {
    //   // fetch.map((recipe: { [x: string]: any; }) => {
    //   //   let temp = recipe["ingriedients"];
    //   //   recipe["ingredients"] = recipe["ingriedients"];
    //   //   recipe["ingredients"] = temp;
    //   // })
    //   // fetch.map((recipe: { [x: string]: any; }) => {
    //   //   let temp = recipe["description"];
    //   //   recipe["preparationSteps"] = recipe["description"];
    //   //   recipe["preparationSteps"] = temp;
    //   // })
    //   this.recipesArray = [...fetch];
    // })
  }
}


  // recipesArray: Recipe[] = [
  //   {
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
  //   },
  //   {
  //     "id": 2,
  //     "name": "jajecznica",
  //     "preparationSteps": [
  //       "Rozpuszczamy masło na patelni",
  //       "Rozbijamy jajka i dodajemy (uwaga! bez skorupki!)",
  //       "Mieszamy rozbite jajka i czekamy na jajecznice"
  //     ],
  //     "ingredients": [
  //       {
  //         "name": "jajka",
  //         "quantity": "3 szt."
  //       },
  //       {
  //         "name": "masło",
  //         "quantity": "łyżeczka"
  //       }
  //     ],
  //     "rating": 5
  //   }
  // ];


