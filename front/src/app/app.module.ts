import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { HeroSectComponent } from './components/hero-sect/hero-sect.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    HeroSectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
