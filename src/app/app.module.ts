import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ImageViewerComponent } from './services/components/image-viewer/image-viewer.component';
import { CaroselComponent } from './services/components/image-viewer/componets/carosel/carosel.component';

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
    ImageViewerComponent,
    CaroselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
