import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudCreateComponent } from './crud-create/crud-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    CrudListComponent,
    CrudCreateComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    CrudCreateComponent,
    CrudListComponent
  ]

})
export class CrudModule { }
