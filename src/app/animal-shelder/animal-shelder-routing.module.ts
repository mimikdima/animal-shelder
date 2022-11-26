import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalShelderComponent } from './animal-shelder.component';
import { ErrorPageComponent } from './wizard/error-page/error-page.component';
import { WizardComponent } from './wizard/wizard.component';


const routes: Routes = [
  {
    path: '',
    component: WizardComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalShelderRoutingModule { }