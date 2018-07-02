import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTableFilterComponent } from './member-table-filter.component';
import { TestModule } from '../../../shared/test.module';
import { L10nLoader } from 'angular-l10n';
import { MemberTableDummyData, MemberTableRow } from '../../../shared/models';

describe('MemberTableFilterComponent', () => {
  let component: MemberTableFilterComponent;
  let fixture: ComponentFixture<MemberTableFilterComponent>;
  let compiled;
  let l10nLoader: L10nLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberTableFilterComponent ],
      imports: [
        TestModule
      ],
      providers: [],
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTableFilterComponent);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    component.filter = MemberTableDummyData.filter;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Func:initData() should work', () => {
    component.initData();
    expect(component.filter).toEqual({
      names: '',
      labels: '',
      members: 0
    });
    expect(component.dropdownLabelsOpened).toEqual(false);
  });

  it('Func:toggleDropdownLabels should work', () => {
    component.dropdownLabelsOpened = false;
    const evtMock = {
      stopPropagation: () => false
    };
    // show labels dropdown lists
    expect(component.toggleDropdownLabels(evtMock)).toEqual(true);
    fixture.detectChanges();
    expect(compiled.querySelector('.labels-filter .labels-list')).toBeTruthy();
    // hide labels dropdown lists
    expect(component.toggleDropdownLabels(evtMock)).toEqual(false);
    fixture.detectChanges();
    expect(compiled.querySelector('.labels-filter .labels-list')).toBeNull();
  });

  it('Func:resetFilter should work', () => {
    expect(component.resetFilter()).toEqual({
      names: '',
      labels: '',
      members: 0
    });
  });
});
