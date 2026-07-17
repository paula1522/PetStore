import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { clienteResolverResolver } from './cliente-resolver.resolver';

describe('clienteResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => clienteResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
