import { Component, EventEmitter, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { AddRecipeFormComponent } from '../add-recipe-form/add-recipe-form.component';
import { RecipeDetailsPageComponent } from '../recipe-details-page/recipe-details-page.component';
import { DetailsSectionComponent } from '../details-section.component';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.css']
})
export class ButtonsContainerComponent implements OnInit {
  @Output() public clickAddRecipeButton = new EventEmitter();
  @Input() currentUser!: any;
  @Input() currentRecipe!: any;

  ngOnInit(): void {
  }

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  emitAddRecipeButtonClick() {
    this.clickAddRecipeButton.emit();
  }



  // public displayAddRecipeForm() {
  //   this.viewContainerRef.clear();
  //   const component = this.viewContainerRef.createComponent(AddRecipeFormComponent);
  // }

  // public displayRecipeDetailsPage() {
  //   this.viewContainerRef.clear();
  //   const component = this.viewContainerRef.createComponent(RecipeDetailsPageComponent);
  // }

}


