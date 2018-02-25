import { Component, OnInit } from '@angular/core';

import { TasksManagerService, TasksConstants } from './modules/tasks-manager';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `
    <main>
      <tasks-manager></tasks-manager>
    </main>
  `,
})

export class AppComponent implements OnInit {

  constructor(
    private tasksManager: TasksManagerService
  ) {}

  ngOnInit() {
    this.tasksManager.init({
      'tasks': [
        TasksConstants.TASK_FAKE_COMPONENT_1,
        TasksConstants.TASK_FAKE_COMPONENT_2
      ]
    });
  }
}
