import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class TasksOptionsService {
  constructor() {}

  init(obj: any) {
    let options = {};
    options['tasks'] = obj['tasks'];
    options['session'] = [];
    options['flags'] = obj['flags'] || null;

    return Observable.of(options);
  }
}
