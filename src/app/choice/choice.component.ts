import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent {
  @Input() choice: string;
  @HostBinding('class') get HeadingClass() {
    return this.choice;
  }
}
