import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterSelectionComponent } from './WhoIam/components/character-selection/character-selection.component';
import { HomeComponent } from './WhoIam/pages/home/home.component';
import { TableCharacterComponent } from './WhoIam/components/table-character/table-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSelectionComponent,
    HomeComponent,
    TableCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
