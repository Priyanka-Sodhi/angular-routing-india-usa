import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiaUsaComponent } from '../india-usa/india-usa.component';
import { AtlanticComponent } from '../atlantic/atlantic.component';
import { PacificComponent } from '../pacific/pacific.component';
import { MealComponent } from '../meal/meal.component';
import { MealpriceComponent } from '../mealprice/mealprice.component';

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
      },
      {
        path:'meal/:price',
        component:MealpriceComponent
      },
      {
        path:'meal/:price',
        component:MealpriceComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

