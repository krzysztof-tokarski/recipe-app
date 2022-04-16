import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { RecipeBoxComponent } from './recipe/recipe-box/recipe-box.component';
import { RecipeCardComponent } from './recipe/recipe-card/recipe-card.component';
import { SearchFieldComponent } from './recipe/search-field/search-field.component';
import { SortingSelectComponent } from './recipe/sorting-select/sorting-select.component';
import { DetailsSectionComponent } from './recipe/details-section/details-section.component';
import { AddRecipeFormComponent } from './recipe/add-recipe-form/add-recipe-form.component';
import { RateRecipeModalComponent } from './recipe/rate-recipe-modal/rate-recipe-modal.component';
import { StarComponent } from './utilities-box/star/star.component';
import { RecipeDetailsPageComponent } from './recipe/recipe-details-page/recipe-details-page.component';
import { TransformRatingToStarsPipe } from './utilities-box/pipes/transform-rating-to-stars.pipe';
import { TransformToUpperCasePipe } from './utilities-box/pipes/transform-to-upper-case.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { routes } from './app-routing.module';



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
    AddRecipeFormComponent,
    RateRecipeModalComponent,
    StarComponent,
    RecipeDetailsPageComponent,
    TransformRatingToStarsPipe,
    TransformToUpperCasePipe,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      urlUpdateStrategy: 'eager'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
