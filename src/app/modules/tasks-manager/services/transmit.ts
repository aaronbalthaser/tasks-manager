import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class Transmit {
  public invalidToken = new Subject();
}
