import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesModelsComponent } from './client-module/mes-models/mes-models.component';

const routes: Routes = [
  { path: '', component: MesModelsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
