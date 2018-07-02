import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MemberTable, MemberTableRow } from '../../../shared/models';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-member-table',
  templateUrl: './member-table.component.html',
  styleUrls: ['./member-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MemberTableComponent implements OnInit {
  @Input() data: MemberTable;
  @Input() hideEmail: boolean;
  checked: boolean[];
  nameSort: boolean;
  dateSort: boolean;

  constructor(
    public commonService: CommonService
  ) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.data = this.data || {
      rows: [],
      filter: {
        names: '',
        labels: '',
        members: 0
      }
    };
    this.hideEmail = this.hideEmail || false;
    this.checked = this.data.rows.map((row: MemberTableRow)  => false);
    this.nameSort = false;
  }

  selectAll(): boolean {
    this.allChecked = !this.allChecked;
    return this.allChecked;
  }

  toggleNameSort(): boolean {
    this.nameSort = !this.nameSort;
    return this.nameSort;
  }

  toggleDateSort(): boolean {
    this.dateSort = !this.dateSort;
    return this.dateSort;
  }

  get allChecked(): boolean {
    return this.checked.every((checked: boolean) => checked);
  }

  set allChecked(value: boolean) {
    this.checked.fill(value);
  }

  get rows(): MemberTableRow[] {
    return this.data.rows.filter((row: MemberTableRow) => {
      const name = `${row.name.firstName} ${row.name.lastName}`;
      return name.toLowerCase().includes(this.data.filter.names.toLowerCase());
    }).sort((a: MemberTableRow, b: MemberTableRow) => {
      const nameA = `${a.name.firstName} ${a.name.lastName}`;
      const nameB = `${b.name.firstName} ${b.name.lastName}`;
      return this.nameSort ? nameA > nameB ? -1 : nameA === nameB ? 0 : 1
            : nameA > nameB ? 1 : nameA === nameB ? 0 : -1;
    });
  }
}
