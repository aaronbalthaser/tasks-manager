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
import { InvalidTokenComponent } from '../../components/invalid-token/invalid-token.component';

@Component({
  selector: 'task-injector',
  template: `<div #taskInjectorContainer></div>`,
  entryComponents: [
    InvalidTokenComponent
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
