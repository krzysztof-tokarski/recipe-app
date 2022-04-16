import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AddRecipeFormComponent } from './recipe/add-recipe-form/add-recipe-form.component';
import { RecipeDetailsPageComponent } from './recipe/recipe-details-page/recipe-details-page.component';
import { LoginGuard } from './utilities-box/db-interactions/login.guard';
import { RoleGuard } from './utilities-box/user-role-guard/user-role.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
        component: AddRecipeFormComponent,
        canActivate: [RoleGuard],
        data: { roles: ["creator"] },
      },
      {
        path: 'recipe/:id',
        component: RecipeDetailsPageComponent,
      }
    ]
  },
  {
    path: "**",
    redirectTo: "home"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // urlUpdateStrategy: 'eager'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
