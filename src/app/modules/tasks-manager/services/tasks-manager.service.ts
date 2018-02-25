import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import "rxjs/add/operator/mergeMap";
import 'rxjs/add/operator/map';

import { TasksOptionsService } from './tasks-options.service';
import { TasksBuilderService } from './tasks-builder.service';
import { TaskEmitterService } from './task-emitter.service';

@Injectable()
export class TasksManagerService {
  public session: any;

  private tasks = [];
  private index = 0;

  constructor(
    private tasksOptions: TasksOptionsService,
    private tasksBuilder: TasksBuilderService,
    private emit: TaskEmitterService
  ) {}

  private start() {
    this.emit.event.next({
      taskName: this.tasks[this.index],
      task: this.session[this.index]
    });
  }

  public next() {
    this.index++;
    if (this.index <= this.session.length - 1) {
      this.emit.event.next({
        taskName: this.tasks[this.index],
        task: this.session[this.index]
      });
    } else {

    }
  }

  public last() {

  }

  public done() {

  }

  public init(name: string, options: any, callback?: Function) {
    this.index = 0;
    this.tasksOptions.init(options)
      .mergeMap(_options => this.tasksBuilder.init(_options))
      .subscribe(
        _options => {
          this.tasks = _options['tasks'];
          this.session = _options['session'];
          this.start();
        }
      );
  }
}
