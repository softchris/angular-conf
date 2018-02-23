import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { SpeakerComponent } from "./speaker.component";
import { SpeakerDetailComponent } from "./speaker-detail.component";

@NgModule({
  declarations: [AppComponent, SpeakerComponent, SpeakerDetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SpeakerDetailComponent]
})
export class AppModule {}
