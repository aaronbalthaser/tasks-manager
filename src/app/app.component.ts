import { Component, OnInit } from '@angular/core';

import { TasksManagerService } from './modules/tasks-manager';

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
    this.tasksManager.session('Whatever', {
      'tasks': [
        'inform_user',
        'blowup'
      ]
    });
  }
}
