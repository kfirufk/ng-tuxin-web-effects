// https://www.creativebloq.com/inspiration/css-animation-examples
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tuxin-effect-bubbles',
  templateUrl: './tuxin-effect-bubbles.component.html',
  styleUrls: ['./tuxin-effect-bubbles.component.scss']
})
export class TuxinEffectBubblesComponent implements OnInit {

  @Input() title = 'bubbles';

  constructor() { }

  ngOnInit() {
  }

}
