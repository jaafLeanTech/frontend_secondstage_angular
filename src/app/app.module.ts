import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Components
import { HeaderComponent } from './pages/components/header/header.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ToolbarComponent } from './pages/components/header/toolbar/toolbar.component';
import { AngularMaterialModule } from './shared';
import { AddUpdateComponent } from './pages/components/add-update/add-update.component';
import { JournalFormComponent } from './pages/components/add-update/journal-form/journal-form.component';
import { TitleFormComponent } from './pages/components/add-update/title-form/title-form.component';
import { AbstractFormComponent } from './pages/components/add-update/abstract-form/abstract-form.component';
import { InformationFormComponent } from './pages/components/add-update/information-form/information-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    AddUpdateComponent,
    JournalFormComponent,
    TitleFormComponent,
    AbstractFormComponent,
    InformationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
