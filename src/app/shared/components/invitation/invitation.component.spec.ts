import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestModule } from '../../test.module';
import { L10nLoader } from 'angular-l10n';

import { InvitationComponent } from './invitation.component';
import { TranslateService } from '../../services/translate.service';

class MockTranslateService {
  translateText() {
    return '';
  }
}

describe('InvitationComponent', () => {
  let component: InvitationComponent;
  let fixture: ComponentFixture<InvitationComponent>;
  let l10nLoader: L10nLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationComponent ],
      imports: [
        TestModule
      ],
      providers: [
        {provide: TranslateService, useClass: MockTranslateService}
      ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be open invitation form', () => {
    component.show();
    fixture.detectChanges();
    const invitationForm = fixture.nativeElement.querySelector('.form-invitation');
    expect(invitationForm).toBeTruthy();
  });
});
