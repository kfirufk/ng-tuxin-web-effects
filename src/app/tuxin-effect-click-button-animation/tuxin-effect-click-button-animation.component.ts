import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tuxin-effect-click-button-animation',
  templateUrl: './tuxin-effect-click-button-animation.component.html',
  styleUrls: ['./tuxin-effect-click-button-animation.component.scss']
})
export class TuxinEffectClickButtonAnimationComponent implements OnInit {

  activeClassEnabled = false;

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  buttonClicked() {
    if (!this.activeClassEnabled) {
      this.onClick.emit();
      // TODO: should stop animation on top div (vAlign)
      this.activeClassEnabled = true;
      setTimeout(() => this.activeClassEnabled = false, 2000);
    }
  }

}
