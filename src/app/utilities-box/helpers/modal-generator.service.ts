import { Subject, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalGeneratorService {

  replaySubject = new ReplaySubject<number | null>(1);

  constructor() { }
}
