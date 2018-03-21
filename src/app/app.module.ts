import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './Components/app.component';
import { ListComponent } from './Components/list/list.component';
import {GameListService} from './Services/game-list.service'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
