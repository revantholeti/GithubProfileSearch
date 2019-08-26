import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SearchdetailsService } from 'src/app/services/searchdetails.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  public user = "";
  public userdata = {};
  public errorMessage =""
  public repos = [];
  public lost;
  constructor(private router:Router,private activatedroute:ActivatedRoute,private searchservice:SearchdetailsService) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((param:ParamMap)=>{
      let username = param.get('username');
      this.user = username;
    });
    this.searchservice.reciveUser(this.user);
    this.searchservice.searchuser().subscribe(userdata => this.userdata = userdata,error => this.errorMessage = error);
    this.searchservice.searchrepos().subscribe(repodata => this.repos = repodata);
  }
  
}
