import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AddRecipeFormComponent } from './recipe/add-recipe-form/add-recipe-form.component';
import { RecipeDetailsPageComponent } from './recipe/recipe-details-page/recipe-details-page.component';
import { LoginGuard } from './utilities-box/db-interactions/login.guard';

export const routes: Routes = [
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
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: AddRecipeFormComponent
      },
      {
        path: 'recipe/:id',
        component: RecipeDetailsPageComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "home"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
