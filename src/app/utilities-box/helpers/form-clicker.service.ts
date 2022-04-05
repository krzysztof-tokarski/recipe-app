import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormClickerService {

  public subject = new Subject;

  constructor() { }
}
