import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LAZY_WIDGETS } from './services/pages-lazy-loader/tokens';
import { lazyArrayToObj, lazyWidgets } from './services/pages-lazy-loader/lazy-widgets';
import { LazyLoaderService } from './services/pages-lazy-loader/lazy-loader.service';
import { provideRoutes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './external-modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: LAZY_WIDGETS, useFactory: lazyArrayToObj },
    LazyLoaderService,
    provideRoutes(lazyWidgets)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
