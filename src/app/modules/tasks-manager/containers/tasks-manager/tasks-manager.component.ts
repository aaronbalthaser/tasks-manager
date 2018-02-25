import { Component } from '@angular/core';

/* Services */
import { TaskEmitterService } from '../../services/task-emitter.service';

@Component({
  selector: 'tasks-manager',
  styleUrls: ['tasks-manager.component.scss'],
  template: `
    <div class="">
      <tasks></tasks>
    </div>
  `
})

export class TasksManagerComponent {}
