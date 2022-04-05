import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { RecipeBoxComponent } from './home-screen/recipe-box/recipe-box.component';
import { RecipeCardComponent } from './home-screen/recipe-box/recipe-card/recipe-card.component';
import { SearchFieldComponent } from './home-screen/recipe-box/search-field/search-field.component';
import { SortingSelectComponent } from './home-screen/recipe-box/sorting-select/sorting-select.component';
import { DetailsSectionComponent } from './home-screen/details-section/details-section.component';
import { ButtonsContainerComponent } from './home-screen/details-section/buttons-container/buttons-container.component';
import { AddRecipeFormComponent } from './home-screen/details-section/add-recipe-form/add-recipe-form.component';
import { RateRecipeModalComponent } from './home-screen/recipe-box/rate-recipe-modal/rate-recipe-modal.component';
import { StarComponent } from './utilities-box/star/star.component';
import { RecipeDetailsPageComponent } from './home-screen/details-section/recipe-details-page/recipe-details-page.component';
import { TransformRatingToStarsPipe } from './utilities-box/pipes/transform-rating-to-stars.pipe';
import { TransformToUpperCasePipe } from './utilities-box/pipes/transform-to-upper-case.pipe';
import { ChildLoaderDirective } from './utilities-box/helpers/child-loader.directive';
import { HttpClientModule } from '@angular/common/http';
import { LogoutButtonComponent } from './home-screen/logout-button/logout-button.component';
import { LoginGuard } from './utilities-box/db-interactions/login.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'home',
    component: HomeScreenComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'details',
        component: DetailsSectionComponent,
        children: [
          {
            path: 'form',
            component: AddRecipeFormComponent,
          },
          {
            path: 'recipe/:id',
            component: RecipeDetailsPageComponent,
            children: [
              {
                path: "modal",
                component: RateRecipeModalComponent,
              }
            ]
          }
        ]
      }
      // {
      //   path: 'form',
      //   component: AddRecipeFormComponent,
      // },
      // {
      //   path: 'rateRecipePopUp',
      //   component: RateRecipeModalComponent,
      // }
    ]
  },
  // {
  //   path: 'world',
  //   component: HelloWorldComponent,
  //   canActivate: [AdminGuardGuard]
  // },
  // {
  //   path: 'europe',
  //   component: HelloEuropeComponent
  // },
  // {
  //   path: 'europe/:id',
  //   component: HelloCountryComponent,
  //   // resolve: {
  //   //   should: ExampleResolver,
  //   // }
  //   children: [
  //     {
  //       path: 'form',
  //       component: HelloCountryFormComponent ,
  //     },
  //     {
  //       path: "details",
  //       component: HelloCountryDetailsComponent,
  //     }
  //   ],
  // },
  {
    path: "**",
    redirectTo: "home"
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    LoginFormComponent,
    HomeScreenComponent,
    RecipeBoxComponent,
    RecipeCardComponent,
    SearchFieldComponent,
    SortingSelectComponent,
    DetailsSectionComponent,
    ButtonsContainerComponent,
    AddRecipeFormComponent,
    RateRecipeModalComponent,
    StarComponent,
    RecipeDetailsPageComponent,
    TransformRatingToStarsPipe,
    TransformToUpperCasePipe,
    ChildLoaderDirective,
    LogoutButtonComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
