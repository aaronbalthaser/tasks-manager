import { Component } from '@angular/core';

/* Services */
import { Transmit } from '../../services/transmit';

@Component({
  selector: 'tasks-manager',
  styleUrls: ['tasks-manager.component.scss'],
  template: `
    <div class="">
      <header>
        <button (click)="open()">Test Open</button>
      </header>
      <tasks></tasks>
    </div>
  `
})

export class TasksManagerComponent {

  constructor(
    private trasmit: Transmit
  ) {}

  public open() {
    this.trasmit.invalidToken.next({
      fakeData: 'fakeData'
    });
  }
}
