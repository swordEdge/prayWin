import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Routing Module
import { AppRoutingModule } from './app.routing';
// Root Components
import { AppComponent } from './app.component';
// Third Party Components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  L10nLoader,
  LocalizationModule,
  LocaleValidationModule,
  TranslationService
} from 'angular-l10n';

// Common and Shared Modules
import { l10nConfig } from './shared/consts';
import { TranslateService } from './shared/services/translate.service';
import { DataSettingService } from './core/services/data-setting.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LocalizationModule.forRoot(l10nConfig),
    LocaleValidationModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
    TranslationService,
    TranslateService,
    DataSettingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
}
