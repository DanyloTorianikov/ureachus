import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { MesModelsComponent } from './mes-models/mes-models.component';
import { UsersModelComponent } from './users-model/users-model.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    MesModelsComponent,
    UsersModelComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    NgxExtendedPdfViewerModule,
    FormsModule,
    CoreModule,
    AppRoutingModule
  ]
})
export class ClientModuleModule { }
