import { Injectable } from '@angular/core';

@Injectable()
export class TasksDataSource {
  public targets = [
    {
      'form': 'inform-user',
      'type': 'inform_user',
      'text': '',
      'icon': '',
      'status': ''
    },
    {
      'form': 'blowup',
      'type': 'blowup',
      'text': '',
      'icon': '',
      'status': ''
    }
  ];

  get() {
    return this.targets;
  }
}
