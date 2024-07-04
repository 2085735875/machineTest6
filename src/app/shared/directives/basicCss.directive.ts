import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector : '[basicCss]'
})
export class BasicCssDirective implements OnInit{

    constructor(
        private _eleRef : ElementRef,
        private _render : Renderer2
    ) {}
    ngOnInit(): void {
      this._render.setStyle(this._eleRef.nativeElement,'background-color','orange')
      this._render.setStyle(this._eleRef.nativeElement,'padding','7px')
      this._render.setStyle(this._eleRef.nativeElement,'color','#fff')
    }

    @HostListener('mouseover')
    onMouseHover(){
        this._render.setStyle(this._eleRef.nativeElement,'background-color','red')
    }

    @HostListener('mouseout')
    onMouseOut(){
        this._render.setStyle(this._eleRef.nativeElement,'background-color','orange')
    }
}