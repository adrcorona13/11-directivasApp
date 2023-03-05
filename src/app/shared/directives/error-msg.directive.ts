import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() msg: string = 'default text';

  constructor(private el: ElementRef<HTMLElement>) {
    console.log('contructor directive');
    console.log(el);
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const mensaje = changes['msg']?.currentValue;
    const txt = document.createTextNode(mensaje);
    this.htmlElement.nativeElement.appendChild(txt);
  }

  ngOnInit(): void {
    console.log('onInit directive');
    this.setColor();
    this.setClass();
    this.setMessage();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMessage(): void {
    const txt = document.createTextNode(this.msg)
    this.htmlElement.nativeElement.appendChild(txt);
  }

}
