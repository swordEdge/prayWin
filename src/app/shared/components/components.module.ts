import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThirdPartyModule } from '../third-party/third-party.module';
import { InvitationComponent } from './invitation/invitation.component';
import { InvitationHeaderComponent } from './invitation-header/invitation-header.component';
import { OverviewComponent } from './overview/overview.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { InvitationGridComponent } from './invitation-grid/invitation-grid.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ThirdPartyModule,
    PipesModule
  ],
  exports: [
    InvitationComponent,
    InvitationHeaderComponent,
    OverviewComponent,
    TransactionsComponent,
    InvitationGridComponent,
  ],
  declarations: [
    InvitationComponent,
    InvitationHeaderComponent,
    OverviewComponent,
    TransactionsComponent,
    InvitationGridComponent,
  ],
  providers: [
  ]
})
export class ComponentsModule { }
