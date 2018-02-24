import { Component } from '@angular/core';

/* Tasks Components */
import { InvalidTokenComponent } from '../../components/invalid-token/invalid-token.component';

/* Services */
import { Transmit } from '../../services/transmit';

@Component({
  selector: 'tasks',
  template: `
    <task-injector
      class="task-injector"
      [componentData]="componentData">
    </task-injector>
  `
})

export class TasksComponent {
  componentData: any = null;

  constructor(
    private trasmit: Transmit
  ) {

    this.trasmit.invalidToken.subscribe(data => this.taskInvalidToken(data));
  }

  private taskInvalidToken(data: any) {
    this.componentData = {
      component: InvalidTokenComponent,
      inputs: {
        data: data
      }
    };
  }
}
