import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageTopComponent } from './components/page-top/page-top.component';
import { AboutComponent } from './components/about/about.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ContactComponent } from './components/contact/contact.component';
import { DevelopmentComponent } from './components/development/development.component';
import { PnfComponent } from './components/pnf/pnf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageTopComponent,
    AboutComponent,
    CollectionComponent,
    ContactComponent,
    DevelopmentComponent,
    PnfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
