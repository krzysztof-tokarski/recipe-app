import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../utilities-box/interfaces/recipe-interface';


@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css']
})
export class RecipeDetailsPageComponent implements OnInit {

  @Input() public recipe!: Recipe;
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    })

    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.recipe = params['recipe']
    // });
    // this.cardClickService.subject.subscribe((value: Recipe) => {
    //   console.log("i also work")
    //   this.recipe = value;
    // })
  }
}


  // recipe: Recipe =
  // {
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
  // }
