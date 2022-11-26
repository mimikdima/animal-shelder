import { NgModule } from '@angular/core';
import { AnimalShelderRoutingModule } from './animal-shelder-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StepsComponent } from './wizard/steps/steps.component';
import { WizardComponent } from './wizard/wizard.component';
import { StartComponent } from './wizard/forms/start/start.component';
import { PetComponent } from './wizard/forms/pet/pet.component';
import { PersonalDataComponent } from './wizard/forms/personal-data/personal-data.component';
import { LastPageComponent } from './wizard/last-page/last-page.component';
import { ErrorPageComponent } from './wizard/error-page/error-page.component';
import { AnimalShelderComponent } from './animal-shelder.component';
import { CommonModule } from '@angular/common';
import { ApiInterceptor } from '../shared/services/api.interceptor';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';


@NgModule({
  declarations: [
    StepsComponent,
    WizardComponent,
    StartComponent,
    PetComponent,
    PersonalDataComponent,
    LastPageComponent,
    ErrorPageComponent,
    AnimalShelderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AnimalShelderRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ]
})
export class AnimalShelderModule { }
