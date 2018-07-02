import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { InviteRemindComponent } from './invite-remind.component';
import { ComponentsModule } from '../../../shared/components/components.module';
import { MemberTableFilterComponent } from '../member-table-filter/member-table-filter.component';
import { MemberTableComponent } from '../member-table/member-table.component';
import { TestModule } from '../../../shared/test.module';
import { TranslateService } from '../../../shared/services/translate.service';
import { DataSettingService } from '../../../../app/core/services/data-setting.service';
class MockTranslateService {
  translateText() {
    return '';
  }
}
import { L10nLoader } from 'angular-l10n';

describe('InviteRemindComponent', () => {
  let component: InviteRemindComponent;
  let fixture: ComponentFixture<InviteRemindComponent>;
  let l10nLoader: L10nLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteRemindComponent, MemberTableFilterComponent, MemberTableComponent ],
      imports: [ ComponentsModule, TestModule ],
      providers: [
        TranslateService,
        DataSettingService,
        {provide: TranslateService, useClass: MockTranslateService}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteRemindComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    pending();
    expect(component).toBeTruthy();
  });
});
