import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MemberTable, MemberTableDummyData } from '../../../shared/models';
import { TranslateService } from '../../../shared/services/translate.service';

@Component({
  selector: 'app-invite-remind',
  templateUrl: './invite-remind.component.html',
  styleUrls: ['./invite-remind.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InviteRemindComponent implements OnInit {
  tabActive = 'invite';
  subTabActive = 'new';
  tableData: MemberTable;
  sidebarOpened: boolean;

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.tableData = MemberTableDummyData;
  }

  onClick(val: string) {
    this.tabActive = val;
  }

  onSubClick(val: string) {
    this.subTabActive = val;
  }

  get reminderText(): string {
    return this.translateService.translateText('teams_search_directory', {});
  }

  get filterIconUrl(): string {
    return this.sidebarOpened ? 'assets/icons/x-white.svg' : 'assets/icons/filter-white.svg';
  }

  toggleSidebar(): boolean {
    this.sidebarOpened = !this.sidebarOpened;
    return this.sidebarOpened;
  }
}
