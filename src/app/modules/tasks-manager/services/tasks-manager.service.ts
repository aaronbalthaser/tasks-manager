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
  private tasks = [];

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

  public done() {
    console.log('done');
  }

  public clean() {
    this.index = 0;
    this.tasks = [];
    this.session = [];
  }

  public init(options: any, callback?: Function) {
    this.callback = callback || null;
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
