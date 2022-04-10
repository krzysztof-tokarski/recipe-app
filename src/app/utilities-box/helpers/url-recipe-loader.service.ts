import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class UrlRecipeLoaderService {

  replaySubject = new ReplaySubject<number>(1);

  constructor() { }
}
