import { Component } from '@angular/core';

interface Card {
  image: string;
  title: string;
  paragraph: string;
}

@Component({
  selector: 'app-about-we-care',
  templateUrl: './about-we-care.component.html',
  styleUrls: ['./about-we-care.component.css']
})
export class AboutWeCareComponent {
  title: string = "We Care!";
  paragraphs: string[] = [
    "Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and the environment. We care about our growth, but also care deeply about the context surrounding us.",
    "Our investments are therefore not limited to internal ones, but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers."
  ];

  cards: Card[] = [
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png",
      title: "Holistic solutions",
      paragraph: "We go beyond a simple patch-up but develop lasting solutions through holistic design."
    },
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png",
      title: "Impact",
      paragraph: "Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change."
    },
    {
      image: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png",
      title: "Open data",
      paragraph: "Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects."
    }
    
  ];
}
