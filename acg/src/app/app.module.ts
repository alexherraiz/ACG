import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, EventEmitter } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule }      from '@angular/http';
import { GlobalLangService } from './globallang.service';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }
    )

  ],
  providers: [Title, GlobalLangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
