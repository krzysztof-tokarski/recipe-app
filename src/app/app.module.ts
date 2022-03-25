import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
import { StarComponent } from './home-screen/recipe-box/star/star.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'login',
  //   component: LoginFormComponent,
  // },
  {
    path: 'home',
    component: HomeScreenComponent,
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
    HeaderComponent,
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
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
