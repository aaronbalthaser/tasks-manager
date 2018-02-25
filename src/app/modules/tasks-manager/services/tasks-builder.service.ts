import { Injectable, } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { TasksDataSource } from '../tasks-data-source';

@Injectable()
export class TasksBuilderService {
  private targets = [];

  constructor(
    private taskTargets: TasksDataSource
  ) {}

  public init(options) {
    this.targets = this.taskTargets.get();

    options['tasks'].map(task => {
      this.targets.map(target => {
        if (target['type'] === task) {
          options['session'].push(target);
        }
      });
    });

    return Observable.of(options);
  }
}
