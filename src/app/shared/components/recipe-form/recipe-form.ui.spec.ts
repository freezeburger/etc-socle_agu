import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeFormUi } from './recipe-form.ui';

describe('RecipeFormUi', () => {
  let component: RecipeFormUi;
  let fixture: ComponentFixture<RecipeFormUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeFormUi],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeFormUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
