import { Directive ,ElementRef,Renderer,HostListener,HostBinding,EventEmitter,Input} from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
 emitColor:EventEmitter<string>;
//  onchangeColor:EventEmitter<string>;
@Input() appMycolor :string[];

i:number=0;
  constructor(private e: ElementRef, private r: Renderer) { 
 //   this.onchangeColor=new EventEmitter();
 this.emitColor=new EventEmitter();
  }
 ngOnInit(){
   
    }
    @HostListener('click') changeColor(){
      if(this.i==this.appMycolor.length)
this.i=0;


      this.r.setElementStyle(this.e.nativeElement,"color",this.appMycolor[this.i]);
      this.emitColor.emit(this.appMycolor[this.i]);
      this.i=this.i+1;

    }

}
