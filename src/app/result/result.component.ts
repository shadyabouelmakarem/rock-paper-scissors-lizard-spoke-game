import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() userPick: string;
  computerPick: string;
  choices = ['scissors', 'spock', 'paper', 'lizard', 'rock'];
  winState: number;
  @Output() playAgainEvent = new EventEmitter<number>();
  @Output() updateScoreEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
    setTimeout(() => {
      this.computerPick =
        this.choices[Math.floor(Math.random() * this.choices.length)];

      setTimeout(() => {
        this.checkWinner();
      }, 500);
    }, 500);
  }

  checkWinner() {
    if (this.userPick === this.computerPick) {
      this.winState = 0;
      return;
    }

    switch (this.userPick) {
      case 'scissors': {
        this.winState = ['paper', 'lizard'].includes(this.computerPick)
          ? 1
          : -1;
        break;
      }

      case 'paper': {
        this.winState = ['rock', 'spock'].includes(this.computerPick) ? 1 : -1;
        break;
      }

      case 'rock': {
        this.winState = ['lizard', 'scissors'].includes(this.computerPick)
          ? 1
          : -1;
        break;
      }

      case 'lizard': {
        this.winState = ['paper', 'spock'].includes(this.computerPick) ? 1 : -1;
        break;
      }

      case 'spock': {
        this.winState = ['scissors', 'rock'].includes(this.computerPick)
          ? 1
          : -1;
        break;
      }
    }

    this.updateScoreEvent.emit(this.winState === 1);
  }

  playAgain() {
    this.playAgainEvent.emit(this.winState);
    this.winState = undefined;
  }
}
