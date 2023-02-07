import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { BukutamuComponent } from './components/project/bukutamu/bukutamu.component';
import { FasrainComponent } from './components/project/fasrain/fasrain.component';
import { GalleriaComponent } from './components/project/galleria/galleria.component';
import { GolistrikComponent } from './components/project/golistrik/golistrik.component';
import { LaravelblogComponent } from './components/project/laravelblog/laravelblog.component';
import { MemorygameComponent } from './components/project/memorygame/memorygame.component';
import { OldportfolioComponent } from './components/project/oldportfolio/oldportfolio.component';
import { PabpComponent } from './components/project/pabp/pabp.component';
import { PerpustakaanComponent } from './components/project/perpustakaan/perpustakaan.component';
import { SkyislandComponent } from './components/project/skyisland/skyisland.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SpotifyComponent } from './components/spotify/spotify.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'spotify',
    component: SpotifyComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'project/golistrik',
    component: GolistrikComponent,
  },
  {
    path: 'project/bukutamu',
    component: BukutamuComponent,
  },
  {
    path: 'project/fascrain',
    component: FasrainComponent,
  },
  {
    path: 'project/pabp',
    component: PabpComponent,
  },
  {
    path: 'project/galleria',
    component: GalleriaComponent,
  },
  {
    path: 'project/perpus',
    component: PerpustakaanComponent,
  },
  {
    path: 'project/oldportfolio',
    component: OldportfolioComponent,
  },
  {
    path: 'project/skyisland',
    component: SkyislandComponent,
  },
  {
    path: 'project/memogame',
    component: MemorygameComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
