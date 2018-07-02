import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  onClick() {
    alert('Build Me!');
  }
}
