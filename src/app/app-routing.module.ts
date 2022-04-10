import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AddRecipeFormComponent } from './recipe/add-recipe-form/add-recipe-form.component';
import { DetailsSectionComponent } from './recipe/details-section/details-section.component';
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
      // {
      //   path: 'details',
      //   component: DetailsSectionComponent,
      //   // children: []
      // },


      // {
      //   path: 'recipe/:id',
      //   component: DetailsSectionComponent,
      //   // children: [
      //   //   {
      //   //     path: "rateRecipe",
      //   //     component: RateRecipeModalComponent,
      //   //   }
      //   // ]
      // },

      // {
      //   path: 'recipe/:id',
      //   component: RecipeDetailsPageComponent,
      //   children: [
      //     {
      //       path: "modal",
      //       component: RateRecipeModalComponent,
      //     }
      //   ]
      // }

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
