import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuxinEffectClickButtonAnimationComponent } from './tuxin-effect-click-button-animation.component';

describe('TuxinEffectClickButtonAnimationComponent', () => {
  let component: TuxinEffectClickButtonAnimationComponent;
  let fixture: ComponentFixture<TuxinEffectClickButtonAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuxinEffectClickButtonAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuxinEffectClickButtonAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
