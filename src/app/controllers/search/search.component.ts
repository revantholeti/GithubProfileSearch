import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public username = ""
  constructor(private router:Router,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
  }

  getData(){
    this.router.navigate(['user',this.username],{relativeTo:this.activatedroute});
  }

}
