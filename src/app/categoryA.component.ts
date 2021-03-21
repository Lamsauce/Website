import { Component, Input } from '@angular/core';

@Component({
  selector: 'categoryA',
  template: `<h3>{{categoryA}}</h3>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class CategoryAComponent  {
  @Input() categoryA: string;
}