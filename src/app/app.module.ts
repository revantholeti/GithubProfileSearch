import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComponents} from './app-routing.module'
import { SearchdetailsService } from './services/searchdetails.service'
import { HttpClientModule } from '@angular/common/http';
import { UserdetailsComponent } from './controllers/userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
