import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCardUi } from './user-card.ui';

describe('UserCardUi', () => {
  let component: UserCardUi;
  let fixture: ComponentFixture<UserCardUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardUi],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
