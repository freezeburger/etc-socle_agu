import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardUi } from './product-card.ui';

describe('ProductCardUi', () => {
  let component: ProductCardUi;
  let fixture: ComponentFixture<ProductCardUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardUi],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
