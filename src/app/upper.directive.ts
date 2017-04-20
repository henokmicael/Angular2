import { Directive,ElementRef, Renderer,HostListener} from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

 constructor(private e: ElementRef, private r: Renderer) { 
      // e.nativeElement.style.fontSize = '22px'
      r.setElementStyle(e.nativeElement, 'font-size', '22px')
  }

@HostListener('mouseover') foo(){ this.e.nativeElement.style.textTransform = 'uppercase';}
}
