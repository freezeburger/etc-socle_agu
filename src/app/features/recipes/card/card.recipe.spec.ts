import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardRecipe } from './card.recipe';

describe('CardRecipe', () => {
  let component: CardRecipe;
  let fixture: ComponentFixture<CardRecipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRecipe],
    }).compileComponents();

    fixture = TestBed.createComponent(CardRecipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
