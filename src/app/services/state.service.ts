import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  language:string = 'eg'
  constructor() { }
  changeLanguage(language:string) {
    this.language = language;
  }
}
