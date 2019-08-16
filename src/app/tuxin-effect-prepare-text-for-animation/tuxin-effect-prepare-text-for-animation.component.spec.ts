import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuxinEffectPrepareTextForAnimationComponent } from './tuxin-effect-prepare-text-for-animation.component';

describe('TuxinEffectPrepareTextForAnimationComponent', () => {
  let component: TuxinEffectPrepareTextForAnimationComponent;
  let fixture: ComponentFixture<TuxinEffectPrepareTextForAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuxinEffectPrepareTextForAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuxinEffectPrepareTextForAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
