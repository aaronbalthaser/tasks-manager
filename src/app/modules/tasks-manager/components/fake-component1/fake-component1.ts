import { Component, Injector } from '@angular/core';

import { TasksManagerService } from '../../services/tasks-manager.service';

@Component({
  selector: 'fake-component1',
  template: `
    <div *ngIf="show">
      Fake Component 1
      <button (click)="continue()">Continut</button>
      <button (click)="done()">Done</button>
      <button (click)="back()">Back</button>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 100%;
      width: 100%;
    }
  `]
})

export class FakeComponent1 {
  public show = true;
  public data: any;

  private _data: any;

  constructor(
    private injector: Injector,
    private tasksManager: TasksManagerService
  ) {

    this._data = this.injector.get('data');
    console.log(this._data);
  }

  public close() {
    this.show = false;
  }

  continue() {
    this.close();
    this.tasksManager.next();
  }

  done() {
    this.close();
    this.tasksManager.done();
  }

  back() {
    this.close();
    this.tasksManager.last();
  }
}
