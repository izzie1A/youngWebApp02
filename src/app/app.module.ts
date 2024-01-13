import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ServiceWorkerModule } from '@angular/service-worker';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemCardComponent } from './components/item-cards/item-card/item-card.component';
import { ItemCardDetailComponent } from './components/item-cards/item-card-detail/item-card-detail.component';
import { ItemCardDialogComponent } from './components/item-cards/item-card-dialog/item-card-dialog.component';
import { ItemCardListComponent } from './components/item-cards/item-card-list/item-card-list.component';

import { AccountComponent } from './components/slides/account/account.component';
import { AdminEditPageComponent } from './components/slides/admin-edit-page/admin-edit-page.component';
import { ContactUsComponent } from './components/slides/contact-us/contact-us.component';
import { HomePageComponent } from './components/slides/home-page/home-page.component';
import { OurClientComponent } from './components/slides/our-client/our-client.component';
import { OurProjectComponent } from './components/slides/our-project/our-project.component';
import { OurProjectDetailComponent } from './components/slides/our-project-detail/our-project-detail.component';
import { OurTeamComponent } from './components/slides/our-team/our-team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCardComponent,
    ItemCardDetailComponent,
    ItemCardDialogComponent,
    ItemCardListComponent,
    AccountComponent,
    AdminEditPageComponent,
    ContactUsComponent,
    HomePageComponent,
    OurClientComponent,
    OurProjectComponent,
    OurProjectDetailComponent,
    OurTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirebaseApp(() => initializeApp({"projectId":"camera-af868","appId":"1:129701599624:web:e81d35789ae33c9e7f823d","databaseURL":"https://camera-af868-default-rtdb.firebaseio.com","storageBucket":"camera-af868.appspot.com","locationId":"us-central","apiKey":"AIzaSyAn4xbkq-uPWA7PZzbfJO1FJv1AWvrmYLY","authDomain":"camera-af868.firebaseapp.com","messagingSenderId":"129701599624","measurementId":"G-2ZNXLJ4GG0"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
