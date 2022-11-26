import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalShelderComponent } from './animal-shelder/animal-shelder.component';


const routes: Routes = [
  {
    path: '',
    component: AnimalShelderComponent,
    loadChildren: () => import('./animal-shelder/animal-shelder.module').then(m => m.AnimalShelderModule)
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }