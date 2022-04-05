import { UserProxy } from './../../utilities-box/helpers/user-proxy.service';
import { LoginService } from './../../utilities-box/db-interactions/login-service.service';
import { Component, ElementRef, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';
import { ChildLoaderDirective } from 'src/app/utilities-box/helpers/child-loader.directive';
import { CardClickService } from 'src/app/utilities-box/helpers/card-click.service';

@Component({
  selector: 'app-details-section',
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.css']
})
export class DetailsSectionComponent implements OnInit {

  @Output() currentRecipe!: any;
  @Output() currentUser!: any;

  // @ViewChild (ChildLoaderDirective, {static: true, read: ViewContainerRef}) childLoader!:ViewContainerRef;
  // @ViewChild ("details", {static: true}) container!:ElementRef;

  constructor(
    // private viewContainerRef: ViewContainerRef,
    private cardClickService: CardClickService,
    private userProxy: UserProxy
  ) { }

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

    this.userProxy.user$.subscribe((user) => {
      this.currentUser = user?.role;
    })
  }

}
