import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { Recipe } from '../interfaces/recipe-interface';

@Injectable({
  providedIn: 'root'
})
export class CardClickService {

  subject = new ReplaySubject<Recipe>(1);

  constructor() {
  }
}
