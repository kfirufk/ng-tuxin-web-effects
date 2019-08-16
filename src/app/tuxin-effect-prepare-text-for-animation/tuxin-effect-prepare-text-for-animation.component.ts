// https://www.creativebloq.com/inspiration/css-animation-examples
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tuxin-effect-prepare-text-for-animation',
  templateUrl: './tuxin-effect-prepare-text-for-animation.component.html',
  styleUrls: ['./tuxin-effect-prepare-text-for-animation.component.scss']
})
export class TuxinEffectPrepareTextForAnimationComponent implements OnInit {

  @Input() text: string;
  @Input() delay = 2;
  public textElements: string[] = [];

  constructor() { }

  ngOnInit() {
    if (this.text !== null) {
      this.textElements = [];
      this.text.split(' ').forEach((textPart: string) => {
        this.textElements.push(textPart);
      });
    }
  }

}
