import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { CareersComponent } from './careers/careers.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AdunitsComponent } from './offerings/adunits/adunits.component';
import { AdvertisersComponent } from './offerings/advertisers/advertisers.component';
import { AnalyticsComponent } from './offerings/analytics/analytics.component';
import { PublishersComponent } from './offerings/publishers/publishers.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  {path:'aboutus',component:AboutusComponent},
  {path:'careers',component:CareersComponent},
  {path:'login',component:ClientLoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'offerings/adunits',component:AdunitsComponent},
  {path:'offerings/advertisers',component:AdvertisersComponent},
  {path:'offerings/analytics',component:AnalyticsComponent},
  {path:'offerings/publishers',component:PublishersComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'',component:HomeComponent},

  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
