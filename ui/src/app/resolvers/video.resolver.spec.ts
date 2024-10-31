import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { videoResolver } from './video.resolver';

describe('videoResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => videoResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
