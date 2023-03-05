import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';

  constructor(private el: ElementRef<HTMLElement>) { 
    console.log('contructor directive');
    console.log(el);
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log('onInit directive');
    this.setColor();
    this.setClass();
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setClass():void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
