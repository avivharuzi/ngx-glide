import { TestBed } from '@angular/core/testing';

import { NgxGlideService } from './ngx-glide.service';

describe('NgxGlideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxGlideService = TestBed.get(NgxGlideService);
    expect(service).toBeTruthy();
  });
});
