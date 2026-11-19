import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeCardUi } from './recipe-card.ui';

describe('RecipeCardUi', () => {
  let component: RecipeCardUi;
  let fixture: ComponentFixture<RecipeCardUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeCardUi],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeCardUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
