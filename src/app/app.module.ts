import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuxinEffectTumblingLetteringComponent } from './tuxin-effect-tumbling-lettering/tuxin-effect-tumbling-lettering.component';
import { TuxinEffectPrepareTextForAnimationComponent } from './tuxin-effect-prepare-text-for-animation/tuxin-effect-prepare-text-for-animation.component';
import { TuxinEffectBubblesComponent } from './tuxin-effect-bubbles/tuxin-effect-bubbles.component';
import { TuxinEffectAnimatedWritingComponent } from './tuxin-effect-animated-writing/tuxin-effect-animated-writing.component';
import { TuxinEffectImageHoverTextComponent } from './tuxin-effect-image-hover-text/tuxin-effect-image-hover-text.component';
import { TuxinEffectClickButtonAnimationComponent } from './tuxin-effect-click-button-animation/tuxin-effect-click-button-animation.component';
import { TuxinEffectFlipScaleComponent } from './tuxin-effect-flip-scale/tuxin-effect-flip-scale.component';

@NgModule({
  declarations: [
    AppComponent,
    TuxinEffectTumblingLetteringComponent,
    TuxinEffectPrepareTextForAnimationComponent,
    TuxinEffectBubblesComponent,
    TuxinEffectAnimatedWritingComponent,
    TuxinEffectImageHoverTextComponent,
    TuxinEffectClickButtonAnimationComponent,
    TuxinEffectFlipScaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
