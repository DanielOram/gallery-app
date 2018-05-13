import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
import { PictureUploadComponent } from './picture-upload/picture-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    PictureUploadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
