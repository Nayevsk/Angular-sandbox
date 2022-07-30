import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history: string[] = []

  add(message:string){
    this.history.push(message)
  }

  clear(){
    this.history = []
  }

    constructor() { }
}
  
