import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core'; //importa questa libreria
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Imposta qui le tue api key
     AgmCoreModule.forRoot({apiKey: 'AIzaSyCYLeJQdYOUqA8OPRQADb1tb70UMf4ogDA'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
