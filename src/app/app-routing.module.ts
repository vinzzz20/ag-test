import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllitemComponent } from './allitem/allitem.component';
//import { MenubarComponent } from './menubar/menubar.component';
import { AppComponent } from './app.component';
import { SaveditemComponent } from './saveditem/saveditem.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'allitems', component: AllitemComponent },
  { path: 'saveditems', component: SaveditemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
