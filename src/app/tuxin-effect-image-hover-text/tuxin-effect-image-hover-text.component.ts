// https://tympanus.net/codrops/2011/11/02/original-hover-effects-with-css3/
// demo at https://tympanus.net/Tutorials/OriginalHoverEffects/
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tuxin-effect-image-hover-text',
  templateUrl: './tuxin-effect-image-hover-text.component.html',
  styleUrls: ['./tuxin-effect-image-hover-text.component.scss']
})
export class TuxinEffectImageHoverTextComponent implements OnInit {

  @Input() effectNumber = '2';
  @Input() imgUrl = 'https://cdn.pixabay.com/photo/2019/07/19/09/40/lavender-4348354_960_720.jpg';
  @Input() title = 'Title';
  @Input() text = 'Your Tex2t';
  @Input() hrefUrl = '#';
  @Input() hrefText = 'Read More';

  constructor() {
  }

  ngOnInit() {
  }

}
