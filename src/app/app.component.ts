import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showRulesModal = false;
  pickedChoice: string;
  score: number;

  ngOnInit() {
    this.score = parseInt(localStorage.getItem('score')) || 0;
  }

  toggleRulesModal(flag: boolean) {
    this.showRulesModal = flag;
  }

  pick(choice: string) {
    this.pickedChoice = choice;
  }

  playAgain() {
    this.pickedChoice = undefined;
  }

  updateScore(win: boolean) {
    if (win) this.score++;
    else this.score--;

    if (this.score < 0) this.score = 0;
    localStorage.setItem('score', this.score.toString());
  }
}
