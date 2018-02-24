import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Module Dependencies */

/* Containers */
import { TasksManagerComponent } from './containers/tasks-manager/tasks-manager.component';
import { TaskInjectorComponent } from './containers/tasks/task-injector.component';
import { TasksComponent } from './containers/tasks/tasks.component';

/* Components */
import { InvalidTokenComponent } from './components/invalid-token/invalid-token.component';

/* Services */
import { TasksDataSource } from './tasks-data-source';
import { TasksManagerService } from './services/tasks-manager.service';
import { TasksBuilderService } from './services/tasks-builder.service';
import { TasksOptionsService } from './services/tasks-options.service';
import { Transmit } from './services/transmit';

import { Store } from './store';

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

    InvalidTokenComponent
  ],
  providers: [
    TasksDataSource,
    TasksManagerService,
    TasksBuilderService,
    TasksOptionsService,
    Transmit,

    Store
  ],
  exports: [
    TasksManagerComponent,
    TaskInjectorComponent,
    TasksComponent
  ]
})

export class TasksManagerModule {}
