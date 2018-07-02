import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThirdPartyModule } from '../../shared/third-party/third-party.module';
import { Sdi2RoutingModule } from './sdi-2-routing.module';
import { Sdi2Component } from './sdi-2.component';
import { InviteRemindComponent } from './invite-remind/invite-remind.component';
import { MemberTableComponent } from './member-table/member-table.component';
import { MemberTableFilterComponent } from './member-table-filter/member-table-filter.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { CommonService } from '../../shared/services/common.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Sdi2RoutingModule,
    ComponentsModule,
    ThirdPartyModule
  ],
  declarations: [
    Sdi2Component,
    InviteRemindComponent,
    MemberTableComponent,
    MemberTableFilterComponent
  ],
  providers: [
    CommonService
  ]
})
export class Sdi2Module { }
