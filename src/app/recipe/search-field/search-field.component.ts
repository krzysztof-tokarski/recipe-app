import { DbFetchService } from '../../utilities-box/db-interactions/db-fetch.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  // inputField!: FormControl;


  inputField = new FormControl("");

  @Output() searchFieldValueEmitter: EventEmitter<string> = new EventEmitter;

  ngOnInit(): void {
    this.inputField.valueChanges.subscribe((value) => {
      this.searchFieldValueEmitter.emit(value);
    })

    // this.inputField = this.formBuilder.control("")
  }

  constructor(
    private dbFetchService: DbFetchService,
  ) { }

  // searchRecipe(value: string) {
  //   this.dbFetchService.searchRecipe(value);
  // }

  // onInput(value: string) {
  //   // this.inputField.valueChanges.map(() => {
  //   //   this.searchFieldValueEmitter.next(this.inputField.value);
  //   // })
  //   this.searchFieldValueEmitter.emit(value)
  // }

}
