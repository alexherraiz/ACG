import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';



@Injectable()
export class GlobalLangService {
  langUpdated:EventEmitter<any> = new EventEmitter();
  lang = "en"

   setLang(lang) {
     this.lang = lang;
     this.langUpdated.emit(this.lang);
   }

   getLang() {
     return this.lang;
   }
}
