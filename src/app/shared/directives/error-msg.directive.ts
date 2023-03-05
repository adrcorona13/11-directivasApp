import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;

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
  }

  ngOnInit(): void {
    this.setClass();
    this.msg = this._msg;
    this.color = this._color;
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
