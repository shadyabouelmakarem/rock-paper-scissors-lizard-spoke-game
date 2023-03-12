import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss'],
})
export class ChoicesComponent {
  @Output() pickEvent = new EventEmitter<string>();
  choices = ['scissors', 'spock', 'paper', 'lizard', 'rock'];

  pick(choice: string) {
    this.pickEvent.emit(choice);
  }
}
