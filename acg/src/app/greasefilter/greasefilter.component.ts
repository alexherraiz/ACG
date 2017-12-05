import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as en_tokens from '../../assets/en_service.json';
import * as es_tokens from '../../assets/es_service.json';
import { GlobalLangService } from '../globallang.service';
import {AccordionModule} from 'primeng/primeng';



@Component({
  selector: 'app-home',
  templateUrl: './greasefilter.component.html',
  styleUrls: ['./greasefilter.component.less']
})
export class GreaseFilterComponent implements OnInit{
  en_tokens;
  es_tokens;
  lang;
  public constructor(private titleService: Title, private http:Http, private langService: GlobalLangService ) {
    //this.en_tokens = http.get('../../assets/en_home.json').map((res:Response) => { console.log(res.json()); return res.json(); })
    //http.get('../../assets/en_home.json').subscribe(result => this.en_tokens =result.json());

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

}
