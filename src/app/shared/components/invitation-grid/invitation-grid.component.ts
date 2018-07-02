import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataSettingService } from '../../../core/services/data-setting.service';

@Component({
  selector: 'app-invitation-grid',
  templateUrl: './invitation-grid.component.html',
  styleUrls: ['./invitation-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InvitationGridComponent implements OnInit {
  sortArray = [];
  currentSort = 'profile';
  rows = [];
  filter = {};
  currentPop: any;

  constructor(
    private dataSettingService: DataSettingService
  ) { }

  ngOnInit() {
    this.dataSettingService.getJSON().subscribe((data) => {
      this.rows = data;
    });
  }

  NameSort() {
    this.currentSort = 'profile';
    this.sortArray['profile'] = !this.sortArray['profile'];
    this.filter = {
      profile: this.sortArray['profile']
    };
  }

  MotivesSort() {
    this.currentSort = 'motives';
    this.sortArray['motives'] = !this.sortArray['motives'];
    this.filter = {
      motives: this.sortArray['motives']
    };
  }

  onClickPop($event: any, pop: any) {
    $event.stopPropagation();
    if (this.currentPop) {
      this.currentPop.close();
    }
    this.currentPop = pop;
  }

}
