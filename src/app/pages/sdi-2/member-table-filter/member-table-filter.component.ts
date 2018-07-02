import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MemberTableFilter, FilterLabel, FilterLabelMocks } from '../../../shared/models';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-member-table-filter',
  templateUrl: './member-table-filter.component.html',
  styleUrls: ['./member-table-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MemberTableFilterComponent implements OnInit {
  @Input() filter: MemberTableFilter;
  @Output() filterChange: EventEmitter<MemberTableFilter> = new EventEmitter();
  dropdownLabelsOpened: boolean;
  filters: FilterLabel[];

  constructor(
    public commonService: CommonService
  ) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.filter = this.filter || {
      names: '',
      members: 0,
      labels: ''
    };
    this.dropdownLabelsOpened = false;
    this.filters = FilterLabelMocks;
  }

  toggleDropdownLabels(event: any): boolean {
    event.stopPropagation();
    this.dropdownLabelsOpened = !this.dropdownLabelsOpened;
    return this.dropdownLabelsOpened;
  }

  resetFilter(): MemberTableFilter {
    this.filter = {
      names: '',
      members: 0,
      labels: ''
    };

    return this.filter;
  }
}
