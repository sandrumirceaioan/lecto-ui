import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserStateInterceptor } from './shared/interceptors/browser-state.interceptor';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { FooteroneComponent } from './shared/components/footer/footerone.component';
import { RouterModule } from '@angular/router';
import { MobilemenuComponent } from './shared/components/header/mobilemenu/mobilemenu.component';
import { AlertModule } from '@full-fledged/alerts';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { HeaderComponent } from './shared/components/header/header.component';

export function initializeApp(appService: AppService) {
  return (): Observable<any> => {
    return appService.init();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    AlertModule.forRoot({ maxMessages: 1, timeout: 5000, positionX: 'right', positionY: 'bottom' }),
  ],
  providers: [
    AppService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BrowserStateInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
