import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-mealprice',
  templateUrl: './mealprice.component.html',
  styleUrls: ['./mealprice.component.css']
})
export class MealpriceComponent implements OnInit {

  selected:string;
  constructor(private router:Router, private activateroute:ActivatedRoute) { }

  ngOnInit() {
    this.activateroute.paramMap.subscribe((param:ParamMap)=>{this.selected = param.get("price")})
  }

}