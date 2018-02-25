import { Injectable } from '@angular/core';

import { TasksConstants } from './services/tasks-constants';

@Injectable()
export class TasksDataSource {
  public targets = [
    {
      'form': 'fake-component-1',
      'type': TasksConstants.TASK_FAKE_COMPONENT_1,
      'text': '',
      'icon': '',
      'status': ''
    },
    {
      'form': 'fake-component-2',
      'type': TasksConstants.TASK_FAKE_COMPONENT_2,
      'text': '',
      'icon': '',
      'status': ''
    }
  ];

  get() {
    return this.targets;
  }
}
