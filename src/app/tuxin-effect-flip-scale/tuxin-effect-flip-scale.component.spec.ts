import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuxinEffectFlipScaleComponent } from './tuxin-effect-flip-scale.component';

describe('TuxinEffectFlipScaleComponent', () => {
  let component: TuxinEffectFlipScaleComponent;
  let fixture: ComponentFixture<TuxinEffectFlipScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuxinEffectFlipScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuxinEffectFlipScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
