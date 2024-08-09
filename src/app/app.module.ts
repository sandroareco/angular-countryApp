import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule
    ],
    exports: [],
    providers: [
        provideHttpClient(),
        { 
            provide: LocationStrategy, 
            useClass: HashLocationStrategy 
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
