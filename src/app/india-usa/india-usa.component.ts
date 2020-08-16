import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-india-usa',
  templateUrl: './india-usa.component.html',
  styleUrls: ['./india-usa.component.css']
})
export class IndiaUsaComponent implements OnInit {

  constructor(private router:Router, private activateroute:ActivatedRoute) { }

  ngOnInit() {
  }

viaAtlantic(){
  this.router.navigate(['atlantic'],{relativeTo:this.activateroute})
}

viaPacific(){
  this.router.navigate(['pacific'],{relativeTo:this.activateroute})
}
}