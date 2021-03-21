import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameComponent } from './name.component';
import { CategoryAComponent } from './categoryA.component';
import { CategoryBComponent} from './categoryB.component';
import { CategoryCComponent} from './categoryC.component';
import { ContentAComponent } from './contentA.component';
import { ContentBComponent } from './contentB.component';
import { ContentCComponent } from './contentC.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NameComponent, CategoryAComponent, CategoryBComponent, CategoryCComponent, ContentAComponent, ContentBComponent, ContentCComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }