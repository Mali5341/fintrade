import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AsideBarComponent } from './shared/components/asideBar/asideBar.component';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './components/notification/notification.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { NgxEditorModule } from 'ngx-editor';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    // LoginPageComponent,
    HomePageComponent,
    HeaderComponent,
    AsideBarComponent,
    NotificationComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxEditorModule,
    GoogleChartsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
