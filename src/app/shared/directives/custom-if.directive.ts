import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[custom-if]'
})
export class CustomIfDirective {

  @Input() set 'custom-if'(condicion: boolean){
    
    if (condicion) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
    
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef) { 
    
  }

}
