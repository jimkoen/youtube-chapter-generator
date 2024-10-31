import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { transcriptResolver } from './transcript.resolver';

describe('transcriptResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => transcriptResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
