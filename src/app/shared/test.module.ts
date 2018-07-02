import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {
  LocalizationModule,
  LocaleValidationModule,
  L10nLoader
} from 'angular-l10n';
import { l10nConfig } from './consts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './services/common.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LocalizationModule.forRoot(l10nConfig),
    LocaleValidationModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterTestingModule
  ],
  exports: [
    LocalizationModule,
    LocaleValidationModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterTestingModule
  ],
  declarations: [],
  providers: [ CommonService ]
})
export class TestModule {}
