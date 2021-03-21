import { Component, Input } from '@angular/core';

@Component({
  selector: 'categoryC',
  template: `<h3>{{categoryC}}</h3>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class CategoryCComponent  {
  @Input() categoryC: string;
}