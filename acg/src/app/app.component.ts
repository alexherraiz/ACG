import { Component, OnInit } from '@angular/core';
import { GlobalLangService } from './globallang.service';
import {Http, Response} from '@angular/http';
import { Title }     from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as en_tokens from '../assets/en_app.json';
import * as es_tokens from '../assets/es_app.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'app';
  en_tokens;
  es_tokens;
  lang;
  public constructor(private titleService: Title, private http:Http, private langService: GlobalLangService ) {
    this.en_tokens = (<any>en_tokens);
    this.es_tokens = (<any>es_tokens);
    this.lang = this.langService.getLang() == 'en' ? this.en_tokens : this.es_tokens;

  }

  ngOnInit() {
    this.titleService.setTitle( "Home" );
    this.langService.langUpdated.subscribe(
          (lang) => {
            this.lang = this.langService.getLang() == 'en' ? this.en_tokens : this.es_tokens;
          }
        );
  }

  toggleLanguage(){
    if(this.langService.getLang() == 'en'){
      this.langService.setLang('es');
      this.lang = this.es_tokens;
    }else{
      this.langService.setLang('en');
      this.lang = this.en_tokens;
    }
  }
}
