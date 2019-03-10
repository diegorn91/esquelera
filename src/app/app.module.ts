import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LowerBarComponent } from './common/lower-bar/lower-bar.component';
import { TopBarComponent } from './common/top-bar/top-bar.component';
import { MainComponent } from './common/main/main.component';
import { EsquelasComponent } from './non-common/esquelas/esquelas.component';


@NgModule({
  declarations: [
    AppComponent,
    LowerBarComponent,
    TopBarComponent,
    MainComponent,
    EsquelasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
