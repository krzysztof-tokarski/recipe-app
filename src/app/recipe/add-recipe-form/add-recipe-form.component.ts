import { FormClickerService } from '../../utilities-box/helpers/form-clicker.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DbFetchService } from '../../utilities-box/db-interactions/db-fetch.service';
import { Recipe } from '../../utilities-box/interfaces/recipe-interface';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})

export class AddRecipeFormComponent implements OnInit {

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.createAddRecipeForm();

  }

  constructor(
    private formBuilder: FormBuilder,
    private dbFetchService: DbFetchService,
    private httpClient: HttpClient,
    private formClicker: FormClickerService
  ) { }



  public removeFromControlsArray(array: FormArray, index: number) {
    array.removeAt(index);
  }




  get recipePreparationStepsFormArray() {
    return this.form.controls['preparationSteps'] as FormArray;
  }

  get recipePreparationStepsControls() {
    return this.recipePreparationStepsFormArray.controls as FormGroup[];
  }

  public addRecipeStep() {
    this.recipePreparationStepsFormArray.push(new FormControl(''));
  }




  get ingredientsFormArray() {
    return this.form.controls['ingredients'] as FormArray;
  }

  get ingredientsControls() {
    return this.ingredientsFormArray.controls as FormGroup[];
  }

  public addIngredient() {
    this.ingredientsFormArray.push(
      new FormGroup({
        name: this.formBuilder.control(""),
        quantity: this.formBuilder.control("")
      })
    )
  };


  submitForm() {
    // let x = this.form.value;
    // // console.log(x)
    // let temp1 = x.recipeName;
    // let temp2 = x.ingredients[0].ingredientName;

    // x.recipeName = x.name;
    // x.ingredients[0].ingredientName = x.ingredients[0].name;
    // x.name = temp1;
    // x.ingredients[0].name = temp2;
    this.httpClient
      .post('http://localhost:3000/recipes', this.form.value)
      .subscribe(
        () => this.formClicker.subject.next("")
      );

  }

  private createAddRecipeForm() {
    const form = this.formBuilder.group({
      id: this.formBuilder.control(""),
      name: this.formBuilder.control('', Validators.compose(
        [Validators.required, Validators.minLength(5), Validators.maxLength(80)])),
      preparationSteps: this.formBuilder.array([this.formBuilder.control('', Validators.compose(
        [Validators.required, Validators.minLength(5), Validators.maxLength(280)]
      ))]),
      ingredients: this.formBuilder.array([
        this.formBuilder.group({
          name: this.formBuilder.control(""),
          quantity: this.formBuilder.control("")
        })]),
      rating: this.formBuilder.control(""),
      creatorId: JSON.parse(localStorage.getItem("user")!).id
    })

    form.controls['preparationSteps'] as FormArray;
    form.controls['ingredients'] as FormArray;

    return form;
  };





}
