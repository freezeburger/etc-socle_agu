import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductFormUi } from './product-form.ui';

describe('ProductFormUi', () => {
  let component: ProductFormUi;
  let fixture: ComponentFixture<ProductFormUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFormUi],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFormUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
