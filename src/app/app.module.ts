import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './home/login/login.component';
import { RegesterComponent } from './home/regester/regester.component';
import { BodyComponent } from './home/body/body.component';
import { FooterComponent } from './home/footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { PartnersComponent } from './home/partners/partners.component';
import { HowItWorksComponent } from './home/how-it-works/how-it-works.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ClientComponent } from './client/client.component';
import { MyOffersComponent } from './client/my-offers/my-offers.component';
import { SearchComponent } from './client/search/search.component';
import { SavedCvComponent } from './client/saved-cv/saved-cv.component';
import { NotificationComponent } from './client/notification/notification.component';
import { ProfileComponent } from './client/profile/profile.component';
import { ChangePasswordComponent } from './client/change-password/change-password.component';
import { OfferSingleComponent } from './client/offer-single/offer-single.component';
import { CandidatSingleComponent } from './client/candidat-single/candidat-single.component';
import { HeaderCComponent } from './client/header-c/header-c.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, children: [
      {path: 'main', component: BodyComponent},
      {path: 'about_us', component: AboutUsComponent },
      {path: 'partners', component: PartnersComponent },
      {path: 'how_it_works', component: HowItWorksComponent },
      {path: 'contact_us', component: ContactUsComponent },
      {path: '', redirectTo: '/home/main', pathMatch: 'full'}
    ]},
  {path: 'client', component: ClientComponent, children: [
      {path: 'myoffers', component: MyOffersComponent},
      {path: 'search', component: SearchComponent},
      {path: 'savedcv', component: SavedCvComponent},
      {path: 'notification', component: NotificationComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'change_pass', component: ChangePasswordComponent},
      {path: '', redirectTo: '/client/myoffers', pathMatch : 'full'}
    ]},
  {path: '', redirectTo: '/home/main', pathMatch : 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegesterComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegesterComponent,
    BodyComponent,
    FooterComponent,
    AboutUsComponent,
    PartnersComponent,
    HowItWorksComponent,
    ContactUsComponent,
    ClientComponent,
    MyOffersComponent,
    SearchComponent,
    SavedCvComponent,
    NotificationComponent,
    ProfileComponent,
    ChangePasswordComponent,
    OfferSingleComponent,
    CandidatSingleComponent,
    HeaderCComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
