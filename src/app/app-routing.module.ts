import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';


const routes: Routes = [
  // { path: '', redirectTo: 'parent', pathMatch: 'full' },   
  // { path: 'child',component: ChildComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
