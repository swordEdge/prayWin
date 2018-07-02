import { TestBed, inject } from '@angular/core/testing';

import { TranslateService } from './translate.service';
import { TranslationService } from 'angular-l10n';

class MockTranslationService {}

describe('TranslateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TranslateService,
        {provide: TranslationService, useClass: MockTranslationService}
      ]
    });
  });

  it('should be created', inject([TranslateService], (service: TranslateService) => {
    expect(service).toBeTruthy();
  }));
});
