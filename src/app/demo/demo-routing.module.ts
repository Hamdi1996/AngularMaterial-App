import { FlexboxComponent } from './flexbox/flexbox.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : 'buttons',component:ButtonsComponent},
  {path : 'flex',component:FlexboxComponent},
  {path:'**',redirectTo:'buttons'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
