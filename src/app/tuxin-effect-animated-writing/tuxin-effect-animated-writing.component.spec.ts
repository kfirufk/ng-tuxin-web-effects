import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuxinEffectAnimatedWritingComponent } from './tuxin-effect-animated-writing.component';

describe('TuxinEffectAnimatedWritingComponent', () => {
  let component: TuxinEffectAnimatedWritingComponent;
  let fixture: ComponentFixture<TuxinEffectAnimatedWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuxinEffectAnimatedWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuxinEffectAnimatedWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
