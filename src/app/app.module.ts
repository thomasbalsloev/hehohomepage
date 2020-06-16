import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationsbarComponent } from './navigationsbar/navigationsbar.component';
import { ExpanpanelComponent } from './expanpanel/expanpanel.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment} from './../environments/environment';
import { ExpansionpanelComponent } from './expansionpanel/expansionpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationsbarComponent,
    ExpanpanelComponent,
    ExpansionpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  
 }
