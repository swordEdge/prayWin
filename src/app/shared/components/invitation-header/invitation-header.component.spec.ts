import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestModule } from '../../test.module';
import { L10nLoader } from 'angular-l10n';

import { InvitationHeaderComponent } from './invitation-header.component';

describe('InvitationHeaderComponent', () => {
  let component: InvitationHeaderComponent;
  let fixture: ComponentFixture<InvitationHeaderComponent>;
  let l10nLoader: L10nLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestModule
      ],
      declarations: [ InvitationHeaderComponent ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
