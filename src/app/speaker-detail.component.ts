import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-speaker-detail",
  template: `
  <div class="speaker-detail">
    <div class="header">
      <img [src]="data.url" alt="speaker" />
      <div class="name">{{data.name}}</div>
    </div>
    <div class="desc" >{{data.description}}</div>
    <div class="social" *ngFor="let social of data.socials" >
      {{social.title}}
    </div>
  </div>
  `,
  styles: [
    `
  .speaker-detail .header {
    background: lightgrey;
    height: 200px;
    display: flex;
    padding-left: 20%;
    padding-top: 10%;
    margin-left: -24px;
    margin-right: -24px;
    margin-top: -24px;
  }

  .speaker-detail .header img {
    width: 60px;
    height: 80px;
    border-radius: 50%;
  }

  .speaker-detail .name {
    text-align: center;
    font-size: 25px;
    margin: 25px 20px;
  }

  .speaker-detail .desc {
    text-align: center;
  }

  .speaker-detail .social {
    display: flex;
    justify-content: center;
  }
  `
  ]
})
export class SpeakerDetailComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SpeakerDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}
}
