import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})
export class AddRecipeFormComponent implements OnInit {

  form!: FormGroup;

  get descriptionStepsFormArray() {
    return this.form.controls['description'] as FormArray;
  }

  get descriptionStepsControls() {
    return this.descriptionStepsFormArray.controls as FormGroup[];
  }

  public addRecipeStep() {
    this.descriptionStepsFormArray.push(new FormControl(''));
  }

  constructor (
    private formBuilder: FormBuilder
  ) {}



  ngOnInit(): void {
    this.form = this.createAddRecipeForm();
  }

  private createAddRecipeForm() {
    const form = this.formBuilder.group({
      recipeName: this.formBuilder.control('',Validators.compose(
          [Validators.required, Validators.minLength(5), Validators.maxLength(80)])),
      description: this.formBuilder.array([this.formBuilder.control('', Validators.compose(
        [Validators.required, Validators.minLength(5),Validators.maxLength(280)]
      ))]),
      ingredients: this.formBuilder.array([this.formBuilder.array([
        this.formBuilder.group({
          ingredientName: this.formBuilder.control(""),
          quantity: this.formBuilder.control("")
        })])]),
      id: this.formBuilder.control(""),
      rating: this.formBuilder.control(""),
    })

    form.controls['description'] as FormArray;

    return form;
};

  // export interface Recipe {
  //   name:string;
  //   rating: number;
  //   id: number;
  //   description: string[];
  //   ingredients: Ingredient[];
  // }

  // export interface Ingredient {
  //   name: string;
  //   value: string;
  // }



}
