import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {
  private htmlElement : ElementRef<HTMLDivElement>

  constructor(private el: ElementRef<HTMLDivElement> ) { 
    this.htmlElement=el
  }

  ngOnInit(){

  }

  setBackgound(){
    this.htmlElement.nativeElement.style.backgroundColor = "333"
  }

}
