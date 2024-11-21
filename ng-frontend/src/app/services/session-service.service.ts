import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getItem(name:string) {
    return localStorage.getItem(name);
  }

  setItem(name:string , value:string) {
    localStorage.setItem(name , value);
  }

  emptyItem(name:string) {
    localStorage.setItem(name , '')
  }  





}
