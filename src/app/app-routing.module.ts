import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './controllers/details/details.component';
import { SearchComponent } from './controllers/search/search.component';
import { UserdetailsComponent } from './controllers/userdetails/userdetails.component';

const routes: Routes = [
  {path:'user/:username',component:UserdetailsComponent},
  {path:'repository/:reponame/:username',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SearchComponent,DetailsComponent,UserdetailsComponent];
