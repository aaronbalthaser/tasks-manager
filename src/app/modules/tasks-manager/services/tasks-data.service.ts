import { Injectable } from '@angular/core';

import { Constants } from '../services/tasks-constants';

@Injectable()
export class TasksDataService {
  private data = [];
  private tasks = [];

  public tasksData = [
    {
      'form': 'inform-user',
      'type': Constants.TASK_INFORM_USER,
      'text': '',
      'icon': '',
      'status': ''
    }
  ];

  constructor() {}

  public flush() {
    this.data = [];
    this.tasks = [];
  }

  public getter() {
    this.data = [];
    // this.tasks = this.setupManager.getter();

    this.tasks.map(taskType => {
      this.tasksData.map(tasksDataItem => {
        if (tasksDataItem['type'] === taskType) {
          tasksDataItem['status'] = '';
          this.data.push(tasksDataItem);
        }
      });
    });

    return this.data;
  }
}
