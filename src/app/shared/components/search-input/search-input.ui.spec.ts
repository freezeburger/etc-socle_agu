import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchInputUi } from './search-input.ui';

describe('SearchInputUi', () => {
  let component: SearchInputUi;
  let fixture: ComponentFixture<SearchInputUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInputUi],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchInputUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
