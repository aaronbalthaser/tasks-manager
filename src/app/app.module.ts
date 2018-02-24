import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Module Dependencies */
import { TasksManagerModule } from './modules/tasks-manager';

/* Containers */
import { AppComponent } from './app.component';

/* Components */

/* Services */

/* Routes */

@NgModule({
  imports: [
    BrowserModule,

    TasksManagerModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
