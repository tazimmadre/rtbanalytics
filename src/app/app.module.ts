import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { AnalyticsComponent } from './offerings/analytics/analytics.component';
import { PublishersComponent } from './offerings/publishers/publishers.component';
import { AdvertisersComponent } from './offerings/advertisers/advertisers.component';
import { AdunitsComponent } from './offerings/adunits/adunits.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PrivacyComponent,
    AboutusComponent,
    CareersComponent,
    ContactusComponent,
    ClientLoginComponent,
    AnalyticsComponent,
    PublishersComponent,
    AdvertisersComponent,
    AdunitsComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
