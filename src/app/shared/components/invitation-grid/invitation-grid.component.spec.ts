import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { async as _async } from 'rxjs/scheduler/async';
import { of } from 'rxjs/observable/of';
import { InvitationGridComponent } from './invitation-grid.component';
import { EventSortPipe } from '../../pipes/event-sort.pipe';
import { TestModule } from '../../test.module';
import { L10nLoader } from 'angular-l10n';
import { DataSettingService } from '../../../core/services/data-setting.service';

describe('InvitationGridComponent', () => {
  let component: InvitationGridComponent;
  let fixture: ComponentFixture<InvitationGridComponent>;
  let l10nLoader: L10nLoader;
  const dataSettingsServiceSpy = {
    getJSON() {
      const data: any[] = [
        {
          profile: {
            avatar: 'assets/images/teams/icon_susananderson@2x.png',
            firstName: 'Susan',
            lastName: 'Anderson',
            job: 'Director of HR',
            meta: 'Inclusive, Flexible, Risk Taking'
          },
          motives: 'HUB',
          status_invited: '2017-9-28',
          status_completed: '2017-9-30',
          status_reminders: [
          ]
        },
        {
          profile: {
            avatar: 'assets/images/teams/icon_susananderson@2x.png',
            firstName: 'Leslie',
            lastName: 'Bevins',
            job: 'Director of Strategy',
            meta: ''
          },
          motives: '',
          status_invited: '2017-9-28',
          status_completed: '',
          status_reminders: [
          ]
        },
        {
          profile: {
            avatar: 'assets/images/teams/icon_susananderson@2x.png',
            firstName: 'Janice',
            lastName: 'Lee',
            job: 'Recruiting Coach',
            meta: ''
          },
          motives: '',
          status_invited: '2017-9-28',
          status_completed: '',
          status_reminders: [
            '2017-9-28',
            '2017-9-28'
          ]
        }
      ];
      return of( data );
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationGridComponent, EventSortPipe ],
      imports: [ TestModule ],
      providers: [
        { provide: DataSettingService, useValue: dataSettingsServiceSpy }
      ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationGridComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
