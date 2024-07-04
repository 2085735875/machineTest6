import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective implements OnInit {

  constructor(
    private _eleRef : ElementRef
  ) { }
  ngOnInit(): void {
    this.errMsg()
  }

  @HostListener("input", ['$event'])
  validCard(eve : Event){
    let inputControl = eve.target as HTMLInputElement;
    // console.log(inputControl.value)
    let val = inputControl.value
    val = val.replace(/\s+/g,'')

    if(val.length > 16){
      val = val.substring(0,16)
    }

    if(/[^\d]/.test(val)){
      inputControl.nextElementSibling?.classList.remove('d-none')
    }
    else{
      inputControl.nextElementSibling?.classList.add('d-none')
    }
    val = this.chunkedArray(val)
    console.log(val)
    inputControl.value = val
  }

  private chunkedArray(str : string){
    let arr1 : Array<string> = []

    for(let i = 0; i < str.length; i += 4){
      arr1.push(str.slice(i, i+4))
    }
    return arr1.join(" ")
  }

  private errMsg(){
    let p = document.createElement('p')
    p.className = "alert alert-danger d-none";
    p.innerHTML = "please enter valid card number";
    this._eleRef.nativeElement.parentNode.append(p)
  }

}
