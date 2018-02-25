import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Module Dependencies */

/* Containers */
import { TasksManagerComponent } from './containers/tasks-manager/tasks-manager.component';
import { TaskInjectorComponent } from './containers/tasks/task-injector.component';
import { TasksComponent } from './containers/tasks/tasks.component';

/* Components */
import { FakeComponent1 } from './components/fake-component1/fake-component1';
import { FakeComponent2 } from './components/fake-component2/fake-component2';

/* Services */
import { TasksDataSource } from './tasks-data-source';
import { TasksManagerService } from './services/tasks-manager.service';
import { TasksBuilderService } from './services/tasks-builder.service';
import { TasksOptionsService } from './services/tasks-options.service';
import { TaskEmitterService } from './services/task-emitter.service';

/* Routes */

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TasksManagerComponent,
    TaskInjectorComponent,
    TasksComponent,

    FakeComponent1,
    FakeComponent2
  ],
  providers: [
    TasksDataSource,
    TasksManagerService,
    TasksBuilderService,
    TasksOptionsService,
    TaskEmitterService
  ],
  exports: [
    TasksManagerComponent,
    TaskInjectorComponent,
    TasksComponent
  ]
})

export class TasksManagerModule {}
