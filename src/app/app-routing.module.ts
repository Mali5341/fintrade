import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotificationComponent } from './components/notification/notification.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: "home-page",
    component: HomePageComponent,
  },

  {
    path: "notification",
    component: NotificationComponent,
  },
  {
    path: "edit-profile",
    component: EditProfileComponent,
  },


  {
    path: "",
    redirectTo: "home-page",
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
