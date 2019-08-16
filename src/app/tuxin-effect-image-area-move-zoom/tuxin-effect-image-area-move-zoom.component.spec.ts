import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuxinEffectImageAreaMoveZoomComponent } from './tuxin-effect-image-area-move-zoom.component';

describe('TuxinEffectImageAreaMoveZoomComponent', () => {
  let component: TuxinEffectImageAreaMoveZoomComponent;
  let fixture: ComponentFixture<TuxinEffectImageAreaMoveZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuxinEffectImageAreaMoveZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuxinEffectImageAreaMoveZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
