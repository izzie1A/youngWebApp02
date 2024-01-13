import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './components/slides/account/account.component';
import { AdminEditPageComponent } from './components/slides/admin-edit-page/admin-edit-page.component';
import { ContactUsComponent } from './components/slides/contact-us/contact-us.component';
import { HomePageComponent } from './components/slides/home-page/home-page.component';
import { OurClientComponent } from './components/slides/our-client/our-client.component';
import { OurProjectComponent } from './components/slides/our-project/our-project.component';
import { OurProjectDetailComponent } from './components/slides/our-project-detail/our-project-detail.component';
import { OurTeamComponent } from './components/slides/our-team/our-team.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'ourProject', component: OurProjectComponent, data: { animation: 'ourProject' },
    children: [
      {
        path: ':name', // child route path
        component: OurProjectDetailComponent, // child route component that the router renders
      },
    ],
  },
  {
    path: 'ourProjectDetail', component: OurProjectDetailComponent,data: { animation: 'ourProjectDetail' },
    children: [
      {
        path: ':name', // child route path
        component: OurProjectDetailComponent, // child route component that the router renders
      },
    ],
  },
  { path: 'homepage', component: HomePageComponent,data: { animation: 'homepage' }, },
  // { path: 'ourProject', component: OurProjectComponent,},
  // { path: 'homepage', component: HomePageComponent},
  { path: 'ourTeam', component: OurTeamComponent,data: { animation: 'ourTeam' }, },
  { path: 'ourClient', component: OurClientComponent,data: { animation: 'ourClient' }, },
  { path: 'contactUs', component: ContactUsComponent,data: { animation: 'contactUs' }, },
  { path: 'admin_pannal', component: AdminEditPageComponent,data: { animation: 'admin_pannal' }, },
  // { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
