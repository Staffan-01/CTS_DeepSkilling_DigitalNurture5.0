import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentFormComponent } from '../../pages/enrollment-form/enrollment-form';
import { EnrollmentRoutingModule } from './enrollment-routing-module';

@NgModule({
  imports: [
    CommonModule,
    EnrollmentRoutingModule,
    EnrollmentFormComponent
  ]
})
export class EnrollmentModule {}
