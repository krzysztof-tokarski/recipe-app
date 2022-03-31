import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';
import { ChildLoaderDirective } from 'src/app/utilities-box/child-loader.directive';
import { CardClickService } from 'src/app/utilities-box/card-click.service';

@Component({
  selector: 'app-details-section',
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.css']
})
export class DetailsSectionComponent implements OnInit {

  currentRecipe!: any;

  // @ViewChild (ChildLoaderDirective, {static: true, read: ViewContainerRef}) childLoader!:ViewContainerRef;
  // @ViewChild ("details", {static: true}) container!:ElementRef;

  constructor(
    // private viewContainerRef: ViewContainerRef,
    private cardClickService: CardClickService
  ) { }

  public displayRecipeDetailsPage() {
    // const viewContainerRef = this.childLoader.viewContainerRef;
    // viewContainerRef.clear();
    // this.myViewContainerRef.clear();
    // // this.container.remove();
    // viewContainerRef.createComponent(RecipeDetailsPageComponent);
  }

  public displayAddRecipeForm() {
    // this.container.remove();
    this.currentRecipe = null;
    // // let viewContainerRef = this.childLoader.viewContainerRef;
    // // viewContainerRef.clear();
    // // this.myViewContainerRef.clear();
    // this.childLoader.createComponent(AddRecipeFormComponent);

  }

  ngOnInit(): void {
    this.cardClickService.subject.subscribe((value: any) => {
      this.currentRecipe = value;
    })
  }


}
