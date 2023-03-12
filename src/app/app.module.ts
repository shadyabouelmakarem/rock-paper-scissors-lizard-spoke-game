import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { ChoicesComponent } from './choices/choices.component';
import { ResultComponent } from './result/result.component';
import { ChoiceComponent } from './choice/choice.component';

@NgModule({
  declarations: [AppComponent, ScoreComponent, ChoicesComponent, ResultComponent, ChoiceComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
