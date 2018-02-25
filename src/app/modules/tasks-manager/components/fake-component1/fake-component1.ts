import { Component, Injector } from '@angular/core';

import { TasksManagerService } from '../../services/tasks-manager.service';

@Component({
  selector: 'fake-component1',
  template: `
    <div *ngIf="show">
      Fake Component 1
      <button (click)="continue()">Continut</button>
      <button (click)="cancel()">Cancel</button>
      <button *ngIf="step > 1" (click)="back()">Back</button>
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
  private data: any;
  private step = null;
  private canceled = true;

  public show = true;

  constructor(
    private injector: Injector,
    private tasksManager: TasksManagerService
  ) {

    this.data = this.injector.get('data');
    this.step = this.data['step'];
  }

  public close() {
    this.show = false;
  }

  continue() {
    this.close();
    this.tasksManager.next();
  }

  cancel() {
    this.close();
    this.tasksManager.done(this.canceled);
  }

  back() {
    this.close();
    this.tasksManager.last();
  }
}
