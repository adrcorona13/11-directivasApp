import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;
  // @Input() color: string = 'red';
  // @Input() msg: string = 'default text';


  private _color: string = 'red';
  private _msg: string = 'Campo requerido';

  @Input() set color(valor: string) {
    this._color = valor;
    this.htmlElement.nativeElement.style.color = this._color;
  }

  @Input() set msg(valor: string) {
    this._msg = valor;
    this.htmlElement.nativeElement.innerHTML = this._msg;
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
    console.log(this.msg);

  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);

    // if (changes['msg']) {
    //   const mensaje = changes['msg'].currentValue;  
    //   this.htmlElement.nativeElement.innerHTML = mensaje;  
    // }

    // if (changes['color']) {
    //   const color = changes['color'].currentValue;  
    //   this.htmlElement.nativeElement.style.color = color;  
    // }

  }

  ngOnInit(): void {
    this.setClass();
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
