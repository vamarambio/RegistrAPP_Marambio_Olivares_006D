import { TestBed } from '@angular/core/testing';

import { TeacherguardGuard } from './teacherguard.guard';

describe('TeacherguardGuard', () => {
  let guard: TeacherguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TeacherguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
