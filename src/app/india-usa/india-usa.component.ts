import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-india-usa',
  templateUrl: './india-usa.component.html',
  styleUrls: ['./india-usa.component.css']
})
export class IndiaUsaComponent implements OnInit {

  atlanticMeals=[
  {
    id:1,
    meal:'Veg meal'
  },
  {
    id:2,
    meal:'Sea food'
  }
  ]
  pacificMeals=[
  {
    id:1,
    meal:'Non-Veg meal'
  },
  {
    id:2,
    meal:'Burger meal'
  }
  ]

  constructor(private router:Router, private activateroute:ActivatedRoute) { }

  ngOnInit() {
  }

viaAtlantic(){
  this.router.navigate(['atlantic'],{relativeTo:this.activateroute})
}

viaPacific(){
  this.router.navigate(['pacific'],{relativeTo:this.activateroute})
}

bookAtlantic(id){
  this.router.navigate(['atlantic',id],{relativeTo:this.activateroute})
}

bookPacific(id){
  this.router.navigate(['pacific',id],{relativeTo:this.activateroute})
}
}