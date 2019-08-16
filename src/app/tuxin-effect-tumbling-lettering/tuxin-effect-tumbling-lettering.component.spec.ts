import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuxinEffectTumblingLetteringComponent } from './tuxin-effect-tumbling-lettering.component';

describe('TuxinEffectTumblingLetteringComponent', () => {
  let component: TuxinEffectTumblingLetteringComponent;
  let fixture: ComponentFixture<TuxinEffectTumblingLetteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuxinEffectTumblingLetteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuxinEffectTumblingLetteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
