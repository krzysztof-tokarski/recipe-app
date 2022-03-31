import { trigger } from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  // styleUrls: ['./star.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class StarComponent implements OnInit {

  @Input() fill = "";
  @Input() rating = true;


  constructor() { }

  ngOnInit(): void {
  }

}
