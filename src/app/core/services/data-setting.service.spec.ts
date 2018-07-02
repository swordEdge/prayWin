import { TestBed, inject } from '@angular/core/testing';

import { DataSettingService } from './data-setting.service';

class MockDataSettingService {

}

describe('DataSettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: DataSettingService, useClass: MockDataSettingService}
      ]
    });
  });

  it('should be created', inject([DataSettingService], (service: DataSettingService) => {
    expect(service).toBeTruthy();
  }));
});
