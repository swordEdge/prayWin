import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateService } from './shared/services/translate.service';
import {
  LocaleValidationModule,
  LocalizationModule,
  L10nLoader,
  L10nConfig,
  StorageStrategy,
  ProviderType,
  TranslationService
} from 'angular-l10n';
import { l10nConfig } from './shared/consts';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonService } from './shared/services/common.service';

class MockTranslateService {}

describe('AppComponent', () => {
  let l10nLoader: L10nLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        LocalizationModule.forRoot(l10nConfig),
        LocaleValidationModule.forRoot()
      ],
      providers: [
        CommonService,
        {provide: TranslateService, useClass: MockTranslateService}
      ],
    }).compileComponents();

    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
