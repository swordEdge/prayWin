import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventSortPipe } from './event-sort.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
      EventSortPipe
    ],
    exports: [
      EventSortPipe
    ]
})
export class PipesModule { }
