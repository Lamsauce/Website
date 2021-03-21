import { Component, Input } from '@angular/core';

@Component({
  selector: 'name',
  template: `<h1>{{name}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class NameComponent  {
  @Input() name: string;
}