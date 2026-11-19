import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { refGuard } from './ref-guard';

describe('refGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => refGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
