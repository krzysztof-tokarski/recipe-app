import { DbFetchService } from '../../utilities-box/db-interactions/db-fetch.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  constructor(
  ) { }

  inputField = new FormControl("");

  @Output() searchFieldValueEmitter: EventEmitter<string | undefined> = new EventEmitter;

  ngOnInit(): void {
    this.inputField.valueChanges
      // .pipe(
      //   filter((inputValue => inputValue.trim().length > 1))
      //   )
      .subscribe((inputValue) => {
        if (inputValue == "") {
          this.searchFieldValueEmitter.emit(undefined);
        } else {
          this.searchFieldValueEmitter.emit(inputValue);
        }
      })

  }



}
