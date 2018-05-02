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
import { HttpClientModule } from '@angular/common/http';
import { SessionService } from './session.service';
import { ActionService } from './action.service';
import { EntryService } from './entry.service';
import { AppService } from './app.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthGuard } from './auth.guard';


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
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SessionService, ActionService, EntryService, AppService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
