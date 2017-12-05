import { BrowserModule, Title } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, EventEmitter } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GreaseFilterComponent } from './greasefilter/greasefilter.component';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule }      from '@angular/http';
import { GlobalLangService } from './globallang.service';
import {AccordionModule} from 'primeng/primeng';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';




const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'greasefilter', component: GreaseFilterComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreaseFilterComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    AccordionModule,
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
