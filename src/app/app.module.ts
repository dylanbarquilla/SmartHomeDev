import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from './material';
import { ToolbarMenuComponent } from './toolbar-menu/toolbar-menu.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'statistiques', component: AppComponent},
  { path: '', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
