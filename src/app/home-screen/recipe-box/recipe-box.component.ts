import { Component, OnInit } from '@angular/core';
import { interval, startWith, Subscription, switchMap } from 'rxjs';
import { DbFetchService } from 'src/app/utilities-box/db-fetch.service';
import { Recipe } from './recipe-interface';

@Component({
  selector: 'app-recipe-box',
  templateUrl: './recipe-box.component.html',
  styleUrls: ['./recipe-box.component.css']
})
export class RecipeBoxComponent implements OnInit {

  timeInterval!: Subscription;
  status!: any;

  recipesArray!: any;
  // recipesArray!: Recipe[];
  // recipes!: Recipe[];

  constructor(
    private dbFetchService: DbFetchService
  ) { }



  ngOnInit(): void {
    this.timeInterval =  interval(1000)
    .pipe(
      startWith(0),
      switchMap(() => this.dbFetchService.fetchRecipes())
    ).subscribe(res => this.recipesArray =  res.body);

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
