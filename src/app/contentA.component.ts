import { Component } from '@angular/core';

@Component({
  selector: 'contentA',
  templateUrl: `contentA.component.html`,
  styles: [`h1 { font-family: Lato; }`]
})
export class ContentAComponent  {
  contentA: string;
}