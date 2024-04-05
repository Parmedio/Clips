import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent
  ]
})
export class SharedModule { 
  public static readonly AUTH_MODAL_ID: string = 'auth';
}
