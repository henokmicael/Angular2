import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-comp1',
  template:`
  <div *appMyvisibility ="condition">
  <ul>
  <li *ngFor="let name of Names">{{name}}</li>
  </ul>
  <li appUpper>hello</li>
  </div>
  <button (click)="changeValue()">visiblity</button>
   <button [appMycolor]="colors" appMycolor (emitColor)="showColor($event)"   >Change Color </button>
    {{Color}}
  `,
  //styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
@Input()
public Names:any[];
public Color:string;
public condition=false;
public colors:String[]=["red","blue","green"];
  
  constructor() { }
changeValue(){
  this.condition=!this.condition;
  
}
showColor(color:string){
this.Color=color;
}
  ngOnInit() {
  }

}
