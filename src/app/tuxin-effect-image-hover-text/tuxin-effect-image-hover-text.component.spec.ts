import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuxinEffectImageHoverTextComponent } from './tuxin-effect-image-hover-text.component';

describe('TuxinEffectImageHoverTextComponent', () => {
  let component: TuxinEffectImageHoverTextComponent;
  let fixture: ComponentFixture<TuxinEffectImageHoverTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuxinEffectImageHoverTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuxinEffectImageHoverTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
