import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-interface';

@Component({
  selector: 'app-recipe-box',
  templateUrl: './recipe-box.component.html',
  styleUrls: ['./recipe-box.component.css']
})
export class RecipeBoxComponent implements OnInit {

  // recipes!: Recipe[];

  recipesArray: Recipe[] = [
    {
      "id": 1,
      "name": "kluski z twarogiem",
      "preparationSteps": [
        "Przygotowujemy garnek wody i solimy go",
        "Gotujemy wodę",
        "Gotujemy makaron",
        "Do ugatowanego makaronu dodajemy twaróg"
      ],
      "ingredients": [
        {
          "name": "makaron",
          "value": "250g"
        },
        {
          "name": "sól",
          "value": "szczypta"
        },
        {
          "name": "twaróg",
          "value": "150g"
        }
      ],
      "rating": 4
    },
    {
      "id": 2,
      "name": "jajecznica",
      "preparationSteps": [
        "Rozpuszczamy masło na patelni",
        "Rozbijamy jajka i dodajemy (uwaga! bez skorupki!)",
        "Mieszamy rozbite jajka i czekamy na jajecznice"
      ],
      "ingredients": [
        {
          "name": "jajka",
          "value": "3 szt."
        },
        {
          "name": "masło",
          "value": "łyżeczka"
        }
      ],
      "rating": 5
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
