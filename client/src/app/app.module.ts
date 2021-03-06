import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppMaterialModule } from './/app-material.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AppService } from './services/app.service';
import { LayoutModule } from '@angular/cdk/layout';
import { NotesComponent } from './components/notes/notes.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { IconsComponent } from './components/icons/icons.component';
import { DialogOverviewExampleDialog } from './components/dialog/dialog.component';
import { DataServiceService } from './services/data-service.service';
import { CollaboratorDialogComponent } from './components/collaborator-dialog/collaborator-dialog.component';
import { CreateLabelDialogComponent } from './components/create-label-dialog/create-label-dialog.component';
import { LabelComponent } from './components/label/label.component';
import { SearchComponent } from './components/search/search.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ChangeImageDialogComponent } from './components/change-image-dialog/change-image-dialog.component';
import { ImageCropperModule } from 'ngx-image-cropper';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    NotesComponent,
    RemindersComponent,
    ArchiveComponent,
    TrashComponent,
    LabelComponent,
    NoteCardComponent,
    IconsComponent,
    DialogOverviewExampleDialog,
    CollaboratorDialogComponent,
    CreateLabelDialogComponent,
    SearchComponent,
    SearchFilterPipe,
    ChangeImageDialogComponent,
  ],
  entryComponents: [
    DialogOverviewExampleDialog,
    CollaboratorDialogComponent,
    CreateLabelDialogComponent,
    ChangeImageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    ImageCropperModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/auth/']
      }
    })
  ],
  providers: [AppService,DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
