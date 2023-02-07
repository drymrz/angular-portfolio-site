import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GolistrikComponent } from './components/project/golistrik/golistrik.component';
import { BukutamuComponent } from './components/project/bukutamu/bukutamu.component';
import { FasrainComponent } from './components/project/fasrain/fasrain.component';
import { PabpComponent } from './components/project/pabp/pabp.component';
import { LaravelblogComponent } from './components/project/laravelblog/laravelblog.component';
import { PerpustakaanComponent } from './components/project/perpustakaan/perpustakaan.component';
import { OldportfolioComponent } from './components/project/oldportfolio/oldportfolio.component';
import { SkyislandComponent } from './components/project/skyisland/skyisland.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleriaComponent } from './components/project/galleria/galleria.component';
import { MemorygameComponent } from './components/project/memorygame/memorygame.component';
import { SpotifyComponent } from './components/spotify/spotify.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    GolistrikComponent,
    BukutamuComponent,
    FasrainComponent,
    PabpComponent,
    LaravelblogComponent,
    PerpustakaanComponent,
    OldportfolioComponent,
    SkyislandComponent,
    MenuComponent,
    ContactComponent,
    GalleriaComponent,
    MemorygameComponent,
    SpotifyComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
