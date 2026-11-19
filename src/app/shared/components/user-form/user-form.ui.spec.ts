import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFormUi } from './user-form.ui';

describe('UserFormUi', () => {
  let component: UserFormUi;
  let fixture: ComponentFixture<UserFormUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFormUi],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
