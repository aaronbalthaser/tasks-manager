import {
  Component,
  Input,
  ViewContainerRef,
  ViewChild,
  ReflectiveInjector,
  ComponentFactoryResolver
} from '@angular/core';

/*** Available Components ***/
/* Tasks Components */
import { FakeComponent1 } from '../../components/fake-component1/fake-component1';
import { FakeComponent2 } from '../../components/fake-component2/fake-component2';

@Component({
  selector: 'task-injector',
  template: `<div #taskInjectorContainer></div>`,
  entryComponents: [
    FakeComponent1,
    FakeComponent2
  ]
})

export class TaskInjectorComponent {
  currentComponent: any = null;

  @ViewChild('taskInjectorContainer', {
    read: ViewContainerRef
  }) taskInjectorContainer: ViewContainerRef;

  @Input() set componentData(data: {component: any, inputs: any }) {
    if (!data) {
      return;
    }

    let inputProviders = Object.keys(data.inputs).map((inputName) => {
      return {
        provide: inputName,
        useValue: data.inputs[inputName]
      };
    });

    let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
    let injector = ReflectiveInjector.fromResolvedProviders(
      resolvedInputs,
      this.taskInjectorContainer.parentInjector
    );
    let factory = this.resolver.resolveComponentFactory(data.component);
    let component = factory.create(injector);

    this.taskInjectorContainer.insert(component.hostView);

    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
  }

  constructor(private resolver: ComponentFactoryResolver) {}
}
