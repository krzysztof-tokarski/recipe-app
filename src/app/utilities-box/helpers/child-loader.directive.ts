import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[childLoader]'
})


export class ChildLoaderDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
