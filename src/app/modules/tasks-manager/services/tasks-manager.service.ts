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
  private callback = null;
  private index = 0;

  public session = [];

  constructor(
    private tasksOptions: TasksOptionsService,
    private tasksBuilder: TasksBuilderService,
    private emit: TaskEmitterService
  ) {}

  private start() {
    this.emit.event.next(this.session[this.index]);
  }

  public next() {
    this.index++;
    if (this.index <= this.session.length - 1) {
      this.emit.event.next(this.session[this.index]);
    } else {
      this.done();
    }
  }

  public last() {
    this.index--;
    if (this.index > -1) {
      this.emit.event.next(this.session[this.index]);
    } else {
      this.index++;
    }
  }

  public done(canceled?: boolean) {
    if (canceled) {
      console.log('canceled');
    }
  }

  public clean() {
    this.callback = null;
    this.index = 0;
    this.session = [];
  }

  public init(options: any, callback?: Function) {
    this.callback = callback || null;
    this.tasksOptions.init(options)
      .mergeMap(_options => this.tasksBuilder.init(_options))
      .subscribe(
        _options => {
          this.session = _options['session'].map((task, index, array) => {
            task['step'] = index + 1;
            return task;
          });

          this.start();
        }
      );
  }
}
