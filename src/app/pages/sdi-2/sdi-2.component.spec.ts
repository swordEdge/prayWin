import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Sdi2Component } from './sdi-2.component';
import { TestModule } from '../../shared/test.module';
import { L10nLoader } from 'angular-l10n';
import { InviteRemindComponent } from './invite-remind/invite-remind.component';
import { MemberTableComponent } from './member-table/member-table.component';
import { MemberTableFilterComponent } from './member-table-filter/member-table-filter.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { TranslateService } from '../../shared/services/translate.service';
import { DataSettingService } from '../../core/services/data-setting.service';

describe('Sdi2Component', () => {
  let component: Sdi2Component;
  let fixture: ComponentFixture<Sdi2Component>;
  let l10nLoader: L10nLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ComponentsModule,
        TestModule
      ],
      declarations: [
        Sdi2Component,
        InviteRemindComponent,
        MemberTableComponent,
        MemberTableFilterComponent
      ],
      providers: [
        TranslateService,
        DataSettingService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    pending();
    expect(component).toBeTruthy();
  });
});
