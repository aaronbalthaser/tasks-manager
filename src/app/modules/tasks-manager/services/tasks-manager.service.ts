import { Injectable } from '@angular/core';

import "rxjs/add/operator/mergeMap";
import 'rxjs/add/operator/map';

import { TasksOptionsService } from './tasks-options.service';
import { TasksBuilderService } from './tasks-builder.service';
import { Store } from '../store';

@Injectable()
export class TasksManagerService {
  constructor(
    private store: Store,
    private tasksOptions: TasksOptionsService,
    private tasksBuilder: TasksBuilderService
  ) {}

  private start() {

  }

  public next() {

  }

  public last() {

  }

  public done() {

  }

  public session(name: string, options: any, callback?: Function) {
    // 1. Setup option.
    // 2. Build Linked List
    this.tasksOptions.init(options)
      .mergeMap(_options => this.tasksBuilder.init(_options))
      .subscribe(
        _options => {
          console.log(_options);
        }
      );
  }
}
