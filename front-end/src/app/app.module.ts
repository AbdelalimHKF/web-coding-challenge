import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { PreferredShopsComponent } from './preferred-shops/preferred-shops.component';
import { PreferredShopComponent } from './preferred-shop/preferred-shop.component';
import { NearbyShopsComponent } from './nearby-shops/nearby-shops.component';
import { NearbyShopComponent } from './nearby-shop/nearby-shop.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    SignInComponent,
    SignUpComponent,
    DashboardPageComponent,
    PreferredShopsComponent,
    PreferredShopComponent,
    NearbyShopsComponent,
    NearbyShopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
