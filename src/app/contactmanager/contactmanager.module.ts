import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';


const routes:Routes =[

{path:'',component:ContactmanagerAppComponent,
children:[
  {path:':id',component:MainContentComponent},
  {path:'',component:MainContentComponent}
]},
{path :'**',redirectTo:''}
];


@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent, NotesComponent, NewContactDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule

  ],
  providers:[
    UserService
  ],
  entryComponents:[
    NewContactDialogComponent
  ]
})
export class ContactmanagerModule { }