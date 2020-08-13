import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages';
import { HomeComponent } from './pages';
import { AppHammerConfig } from './app.hammer.config';

@NgModule({
  declarations: [
    AppComponent, 
    AdminComponent, 
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: AppHammerConfig
  }],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
