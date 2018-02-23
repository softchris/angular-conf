import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  speakers = [
    {
      name: "chris noring",
      description: "GDE",
      url: "/assets/speaker.jpg",
      socials: [
        {
          title: "github"
        },
        {
          title: "twitter"
        }
      ]
    },
    {
      name: "chris noring",
      description: "GDE",
      url: "/assets/speaker.jpg",
      socials: []
    },
    {
      name: "chris noring",
      description: "GDE",
      url: "/assets/speaker.jpg",
      socials: []
    },
    {
      name: "chris noring",
      description: "GDE",
      url: "/assets/speaker.jpg",
      socials: []
    },
    {
      name: "chris noring",
      description: "GDE",
      url: "/assets/speaker.jpg",
      socials: []
    },
    {
      name: "chris noring",
      description: "GDE",
      url: "/assets/speaker.jpg",
      socials: []
    },
    {
      name: "chris noring",
      description: "GDE",
      url: "/assets/speaker.jpg",
      socials: []
    }
  ];
  items = [
    "Home",
    "Speakers",
    "Tickets",
    "Workshops",
    "Schedules",
    "Attendees",
    "Sponsors",
    "Partners",
    "Team",
    "ng-Girls"
  ];
}
