import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';


@Component({
  selector: 'app-sorting-select',
  templateUrl: './sorting-select.component.html',
  styleUrls: ['./sorting-select.component.css']
})


export class SortingSelectComponent implements OnInit {

  @Output() sortingSelectValueEmitter: EventEmitter<string[]> = new EventEmitter;

  constructor() { }

  public sortSelect = new FormControl('');

  public sortOptions = [
    {
      value: 'name,asc',
      label: 'A-Z',
    },
    {
      value: 'name,desc',
      label: 'Z-A',
    },
    {
      value: 'rating,desc',
      label: 'Najlepiej ocenione',
    },
    {
      value: 'rating,asc',
      label: 'Najgorzej ocenione',
    },
    {
      value: 'id,asc',
      label: 'Od najstarszych',
    },
    {
      value: 'id,desc',
      label: 'Od najnowszych',
    },
  ];

  ngOnInit(): void {
    // this.sortSelect.valueChanges
    //   .pipe(map((value: string) => value.split(',')))
    //   .subscribe(([propertyName, sortValue]) => {

    //   })
    this.sortSelect.valueChanges
      .pipe(map((value: string) => value.split(',')))
      .subscribe((value) => {
        this.sortingSelectValueEmitter.emit(value)
      })
  }

  // onInput(value: SortingCriteria) {

  // }
}
