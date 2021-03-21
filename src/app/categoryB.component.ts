  
import { Component, Input } from '@angular/core';

@Component({
  selector: 'categoryB',
  template: `<h3>{{categoryB}}</h3>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class CategoryBComponent  {
  @Input() categoryB: string;
}