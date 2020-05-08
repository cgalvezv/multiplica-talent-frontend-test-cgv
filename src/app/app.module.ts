import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsGridPanelComponent } from './colors-grid-panel/colors-grid-panel.component';
import { ColorsListPanelComponent } from './colors-list-panel/colors-list-panel.component';
import { ColorElementComponent } from './colors-grid-panel/color-element/color-element.component';
import { PaginatorComponent } from './shared/paginator/paginator.component';
import { MaterialModule } from './shared/material.module';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { ColorApiService } from './shared/services/color-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ColorsGridPanelComponent,
    ColorsListPanelComponent,
    ColorElementComponent,
    PaginatorComponent,
    MainPanelComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    ColorApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
