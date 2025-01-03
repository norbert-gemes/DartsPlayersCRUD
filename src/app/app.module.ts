import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerDataComponent } from './player-data/player-data.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, PlayerDataComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
