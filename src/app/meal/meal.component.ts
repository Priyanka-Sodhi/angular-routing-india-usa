import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  selected:string;
  constructor(private router:Router, private activateroute:ActivatedRoute) { }

  ngOnInit() {
    this.activateroute.paramMap.subscribe((param:ParamMap)=>{
      this.selected = param.get("id");
    })
  }

atlanticMealsPrice=[
  {
    price:100,
  },
  {
    price:150
  }
]
pacificMealsPrice=[
  {
    price:160,
  },
  {
    price:200
  }
]

bookAtlanticMealsPrice(price){
  this.router.navigate(['atlantic/:id',price],{relativeTo:this.activateroute})
}

bookPacificMealsPrice(price){
  this.router.navigate(['pacific/:id',price],{relativeTo:this.activateroute})
}


}