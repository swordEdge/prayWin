import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTableComponent } from './member-table.component';
import { MemberTableDummyData, MemberTableRow } from '../../../shared/models';
import { TestModule } from '../../../shared/test.module';
import { L10nLoader } from 'angular-l10n';

describe('MemberTableComponent', () => {
  let component: MemberTableComponent;
  let fixture: ComponentFixture<MemberTableComponent>;
  let l10nLoader: L10nLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberTableComponent ],
      imports: [ TestModule ],
      providers: []
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTableComponent);
    component = fixture.componentInstance;
    component.data = MemberTableDummyData;
    component.hideEmail = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
