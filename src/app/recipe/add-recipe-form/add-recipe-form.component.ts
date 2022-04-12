import { AuthenticationService } from 'src/app/utilities-box/db-interactions/authentication-service.service';
import { FormClickerService } from '../../utilities-box/helpers/form-clicker.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/utilities-box/interfaces/user-interface';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})

export class AddRecipeFormComponent implements OnInit {

  form!: FormGroup;

  currentUser!: User

  ngOnInit(): void {
    this.authenticationService.userSubject$.subscribe(
      user => this.currentUser = user
    )
    this.form = this.createAddRecipeForm();
  }

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private formClicker: FormClickerService,
    private authenticationService: AuthenticationService
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
      creatorId: this.currentUser.id
    })

    form.controls['preparationSteps'] as FormArray;
    form.controls['ingredients'] as FormArray;

    return form;
  };





}
