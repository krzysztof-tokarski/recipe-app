import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, tap } from 'rxjs';
import { SortingCriteria, SortingProperty, SortingOrder } from 'src/app/utilities-box/interfaces/sorting-types';


// do wysieniesnia


@Component({
  selector: 'app-sorting-select',
  templateUrl: './sorting-select.component.html',
  styleUrls: ['./sorting-select.component.css']
})


export class SortingSelectComponent implements OnInit {

  @Output() sortingSelectValueEmitter: EventEmitter<SortingCriteria> = new EventEmitter;


  constructor(
  ) { }

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
    this.sortSelect.valueChanges
      .pipe(

      )
      .subscribe((value: SortingCriteria) => {
        console.log(value)
        this.sortingSelectValueEmitter.emit(value)
      })
  }
}
