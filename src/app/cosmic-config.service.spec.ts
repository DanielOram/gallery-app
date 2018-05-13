import { TestBed, inject } from '@angular/core/testing';

import { CosmicConfigService } from './cosmic-config.service';

describe('CosmicConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CosmicConfigService]
    });
  });

  it('should be created', inject([CosmicConfigService], (service: CosmicConfigService) => {
    expect(service).toBeTruthy();
  }));
});
