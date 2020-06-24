import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chat } from './chat';

@NgModule({
  declarations: [
    Chat,
  ],
  imports: [
    IonicPageModule.forChild(Chat),
  ],
})
export class ChatPageModule {}
