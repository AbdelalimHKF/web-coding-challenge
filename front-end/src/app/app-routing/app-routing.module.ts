import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { DashboardPageComponent } from '../dashboard-page/dashboard-page.component';

const appRoutes: Routes =[
  { path:'welcome', component: WelcomePageComponent },
  { path:'dashboard', component: DashboardPageComponent },
  { path : '' , redirectTo : '/welcome' , pathMatch: 'full'}
];

@NgModule(
  
  {
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [RouterModule]
})
export class AppRoutingModule { }
