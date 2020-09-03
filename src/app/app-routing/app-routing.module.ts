import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiaUsaComponent } from '../india-usa/india-usa.component';
import { AtlanticComponent } from '../atlantic/atlantic.component';
import { PacificComponent } from '../pacific/pacific.component';
import { MealComponent } from '../meal/meal.component';

const routes: Routes = [
  {
    path:"",    //base url
    redirectTo:"india-usa",
    pathMatch:"full"
  },
  {
    path:"india-usa",
    component:IndiaUsaComponent,
    children:[
      {
        path:'atlantic',
        component:AtlanticComponent
      },
      {
        path:'pacific',
        component:PacificComponent
      },
      {
        path:'atlantic/:id',
        component:MealComponent
      },
      {
        path:'pacific/:id',
        component:MealComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

