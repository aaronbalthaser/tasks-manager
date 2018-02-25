import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class TaskEmitterService {
  // Events
  public event = new Subject();
}
