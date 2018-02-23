import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { SpeakerDetailComponent } from "./speaker-detail.component";

@Component({
  selector: "app-speaker",
  template: `
    <div class="speaker" (click)="open()">
      <img [src]="speaker.url" alt="speaker" />
      <div class="name">{{speaker.name}}</div>
      <div class="desc" >{{speaker.description}}</div>
      <div class="social" *ngFor="let social of speaker.socials" >
        {{social.title}}
      </div>
    </div>
  `,
  styles: [
    `
  .speaker {
    padding: 10px 20px;
    box-shadow: 0px 0px 5px lightgrey;
    height: 350px;
    width: 300px;
    margin: 10px 10px;
  }

  .speaker img {
    width: 100%;
    border-radius: 50%;
  }

  .speaker .name {
    text-align: center;
    margin: 10px 0px;
  }

  .speaker .desc {
    text-align: center;
  }

  .social {
    display: flex;
    justify-content: center;
  }
  `
  ]
})
export class SpeakerComponent implements OnInit {
  @Input() speaker;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  open() {
    const dialogRef = this.dialog.open(SpeakerDetailComponent, {
      height: "600px",
      width: "600px",
      data: this.speaker
    });
  }
}
