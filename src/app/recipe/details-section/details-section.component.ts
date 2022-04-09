import { Subscription } from 'rxjs';
import { UserProxy } from './../../utilities-box/helpers/user-proxy.service';
import { LoginService } from './../../utilities-box/db-interactions/login-service.service';
import { Component, ElementRef, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import { AddRecipeFormComponent } from '../add-recipe-form/add-recipe-form.component';
// import { ChildLoaderDirective } from 'src/app/utilities-box/helpers/child-loader.directive';
import { CardClickService } from '../../utilities-box/helpers/card-click.service';
import { User } from 'src/app/utilities-box/interfaces/user-interface';

@Component({
  selector: 'app-details-section',
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.css']
})
export class DetailsSectionComponent implements OnInit, OnDestroy {

  @Output() currentRecipe!: any;
  @Output() currentUser!: User;

  // @ViewChild (ChildLoaderDirective, {static: true, read: ViewContainerRef}) childLoader!:ViewContainerRef;
  // @ViewChild ("details", {static: true}) container!:ElementRef;

  constructor(
    // private viewContainerRef: ViewContainerRef,
    private cardClickService: CardClickService,
    private userProxy: UserProxy,
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
    console.log('init')
    this.cardClickService.subject.subscribe((value: any) => {
      console.log(value)
      this.currentRecipe = value;
    })

    this.currentUser = JSON.parse(localStorage.getItem('user')!);
    // this.userProxy.user$?.subscribe((user) => {
    //   this.currentUser = user;
    // })
  }

  ngOnDestroy(): void {
  }

}
