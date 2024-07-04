import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToLowerCase]'
})
export class ToLowerCaseDirective {

  constructor(
    private _eleRef : ElementRef,
    private _rendrer : Renderer2
  ) { }

  @HostListener('keyup')
  onKeyUp(){
    this._eleRef.nativeElement.value = this._eleRef.nativeElement.value.toLowerCase()
  }

}
