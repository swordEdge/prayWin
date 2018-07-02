import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LocalizationModule,
  LocaleValidationModule,
  L10nLoader
} from 'angular-l10n';
import { l10nConfig } from '../consts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LocalizationModule.forRoot(l10nConfig),
    LocaleValidationModule.forRoot(),
    NgbModule.forRoot()
  ],
  exports: [
    LocalizationModule,
    HttpClientModule,
    LocaleValidationModule,
    NgbModule
  ],
  declarations: []
})
export class ThirdPartyModule {
  constructor(public l10nLoader: L10nLoader) {
    this.l10nLoader.load();
  }
}
