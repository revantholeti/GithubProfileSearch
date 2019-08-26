import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchdetailsService {

  constructor(private http:HttpClient) { }

  public url="";
  public repourl="";
  public reponame = "";
  public lang ="";

  reciveUser(username:string){
    this.url="https://api.github.com/users/".concat(username);
    this.repourl=this.url.concat("/repos");
  }

  searchuser():Observable<any>{
    return this.http.get(this.url).pipe(catchError(this.errorHandler));
  }

  searchrepos():Observable<any>{
    return this.http.get(this.repourl).pipe(catchError(this.errorHandler));
  }

  setrepo(repo:string,user:string){
    this.reponame = "https://api.github.com/".concat("repos/").concat(user).concat("/").concat(repo);
    this.lang = this.reponame.concat("/languages");
  }

  getrepo():Observable<any>{
    return this.http.get(this.reponame).pipe(catchError(this.errorHandler));
  }

  getlanguages():Observable<any>{
    return this.http.get(this.lang);
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "User Not Found");
  }
}
