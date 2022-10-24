import { TestBed } from '@angular/core/testing';

import { StudentguardGuard } from './studentguard.guard';

describe('StudentguardGuard', () => {
  let guard: StudentguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
