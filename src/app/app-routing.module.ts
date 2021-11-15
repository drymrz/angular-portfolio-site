import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ContactComponent } from './components/contact/contact.component';
import { DevelopmentComponent } from './components/development/development.component';
import { PageTopComponent } from './components/page-top/page-top.component';
import { PnfComponent } from './components/pnf/pnf.component';

const routes: Routes = [
  { path: 'main', component: PageTopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'development', component: DevelopmentComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'contact', component: ContactComponent },
  { path: '404', component: PnfComponent },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
