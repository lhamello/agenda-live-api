import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';
import { HomeComponent } from './views/home/home.component';
import { LiveListComponent } from './views/home/live-list/live-list.component';
import { LiveFormDialogComponent } from './views/home/live-form-dialog/live-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveListComponent,
    LocalDateTimePipe,
    LiveFormDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,    
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [
    LocalDateTimePipe,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
