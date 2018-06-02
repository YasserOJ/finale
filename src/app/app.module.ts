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

const appRoutes: Routes = [
  {path: 'home', component: BodyComponent},
  {path: 'about_us', component: AboutUsComponent },
  {path: 'partners', component: PartnersComponent },
  {path: 'how_it_works', component: HowItWorksComponent },
  {path: 'contact_us', component: ContactUsComponent },
  {path: '', redirectTo: '/home', pathMatch : 'full'},
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
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
