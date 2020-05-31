import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutPage } from './workout';

@NgModule({
  declarations: [
    WorkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutPage),
  ],
})
export class WorkoutPageModule {}
