import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from './material';
import { ToolbarMenuComponent } from './toolbar-menu/toolbar-menu.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { PageStatistiquesComponent } from './page-statistiques/page-statistiques.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import {FormsModule} from '@angular/forms';
import { PageAuthentificationComponent } from './page-authentification/page-authentification.component';
import { LampeComponent } from './lampe/lampe.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'statistiques',
    component: PageStatistiquesComponent,
    data: { title : 'Statistiques' }
  },
  {
    path: 'lampe',
    component: LampeComponent,
    data: { title : 'Lampes' }
  },
  { path: 'auth', component: PageAuthentificationComponent},
  { path: '', component: PageAccueilComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarMenuComponent,
    HomeComponent,
    PageStatistiquesComponent,
    PageAccueilComponent,
    PageAuthentificationComponent,
    LampeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
