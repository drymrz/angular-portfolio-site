import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTopComponent } from './components/page-top/page-top.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  { path: 'main', component: PageTopComponent },
  { path: 'home', component: WrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
