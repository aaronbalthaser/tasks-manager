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
import { TasksManagerService } from './services/tasks-manager.service';
import { TasksDataService } from './services/tasks-data.service';
import { Transmit } from './services/transmit';

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
    TasksManagerService,
    TasksDataService,
    Transmit
  ],
  exports: [
    TasksManagerComponent,
    TaskInjectorComponent,
    TasksComponent
  ]
})

export class TasksManagerModule {}
