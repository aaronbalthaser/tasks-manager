import { Component } from '@angular/core';

/* Tasks Components */
import { FakeComponent1 } from '../../components/fake-component1/fake-component1';
import { FakeComponent2 } from '../../components/fake-component2/fake-component2';

/* Services */
import { TaskEmitterService } from '../../services/task-emitter.service';

import { TasksConstants } from '../../services/tasks-constants';

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

  constructor(private trasmit: TaskEmitterService) {
    this.trasmit.event.subscribe(data => this.event(data))
  }

  private event(task: object) {
    console.log(task);
    let name = task['type'];
    let component;

    switch (name) {
      case TasksConstants.TASK_FAKE_COMPONENT_1:
        component = FakeComponent1;
        break;
      case TasksConstants.TASK_FAKE_COMPONENT_2:
        component = FakeComponent2;
        break;
      default:
        component = null;
    }

    this.renderComponent(component, task);
  }

  private renderComponent(component: any, task: object) {
    this.componentData = {
      component: component,
      inputs: {
        data: task
      }
    };
  }
}
