import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuxinEffectBubblesComponent } from './tuxin-effect-bubbles.component';

describe('TuxinEffectBubblesComponent', () => {
  let component: TuxinEffectBubblesComponent;
  let fixture: ComponentFixture<TuxinEffectBubblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuxinEffectBubblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuxinEffectBubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
