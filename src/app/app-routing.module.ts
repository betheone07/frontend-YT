import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { UploadvideoComponent } from './uploadvideo/uploadvideo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowvideosComponent } from './showvideos/showvideos.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
 {
   path: 'dashboard',
   component: DashboardComponent

 } ,
 {
    path: 'showvideos',
    component: ShowvideosComponent
 },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'uploadvideo',
    component: UploadvideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
