import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({ projectId: "manageuser-1ca05", appId: "1:607484687325:web:335e665fbc01004d6f7c34", storageBucket: "manageuser-1ca05.firebasestorage.app", apiKey: "AIzaSyDQkq3LFl602OWv52hRDpzyHGmjspQHedw", authDomain: "manageuser-1ca05.firebaseapp.com", messagingSenderId: "607484687325", measurementId: "G-1DDYN72MXH" })), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
