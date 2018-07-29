import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { createAppStore, AppStoreInjectionToken } from './store/app.store';
@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule, CommonModule
  ],
  providers: [
    { provide: AppStoreInjectionToken, useFactory: createAppStore }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
