import { Directive, ElementRef,Renderer,Input,HostBinding,HostListener,TemplateRef,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
 private hasView = false;
  constructor(private e:ElementRef,private r:Renderer, private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef) { }


@Input() set appMyvisibility(condition: boolean) {
  if (!condition && !this.hasView) {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.hasView = true;
  } else if (condition && this.hasView) {
    this.viewContainer.clear();
    this.hasView = false;
  }
}
}
