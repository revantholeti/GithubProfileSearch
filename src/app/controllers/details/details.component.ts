import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SearchdetailsService } from 'src/app/services/searchdetails.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public reponame = "";
  public repo = {};
  public lang ={};
  public errorMessage;
  public username;
  constructor(private router:Router,private activatedroute:ActivatedRoute,private searchdetails:SearchdetailsService) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((params:ParamMap)=>{
      const reponame = params.get('reponame');
      const username = params.get('username');
      this.reponame = reponame;
      this.username = username;
    });
    this.searchdetails.setrepo(this.reponame,this.username);
    this.searchdetails.getrepo().subscribe(data => this.repo = data,error => this.errorMessage = error);
    this.searchdetails.getlanguages().subscribe(data => this.lang = data);
  }

}
