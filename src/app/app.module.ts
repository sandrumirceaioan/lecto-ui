import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserStateInterceptor } from './shared/interceptors/browser-state.interceptor';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HeadertwoComponent } from './shared/components/header/headertwo.component';
import { FooteroneComponent } from './shared/components/footer/footerone.component';
import { RouterModule } from '@angular/router';
import { MobilemenuComponent } from './shared/components/header/mobilemenu/mobilemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadertwoComponent,
    MobilemenuComponent,
    FooteroneComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'lecto-app' }),
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    TransferHttpCacheModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BrowserStateInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
