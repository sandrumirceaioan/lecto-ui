import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerStateInterceptor } from './shared/interceptors/server-state.interceptor';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    BrowserModule.withServerTransition({ appId: 'lecto-app' }),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerStateInterceptor,
      multi: true
  }
  ]
})
export class AppServerModule {}