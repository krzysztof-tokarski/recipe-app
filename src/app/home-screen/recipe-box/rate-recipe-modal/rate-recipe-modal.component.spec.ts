import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateRecipeModalComponent } from './rate-recipe-modal.component';

describe('RateRecipeModalComponent', () => {
  let component: RateRecipeModalComponent;
  let fixture: ComponentFixture<RateRecipeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateRecipeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateRecipeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
