import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../home-screen/recipe-box/recipe-interface';

@Injectable({
  providedIn: 'root'
})
export class CardClickService {

  subject = new Subject<Recipe>();

  constructor() { }
}
