import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
interface Member{
  image:string,
  name:string,
  title:string,

}
@Component({
  selector: 'app-about-team-carousel',
  templateUrl: './about-team-carousel.component.html',
  styleUrls: ['./about-team-carousel.component.css'],
  animations: [
    trigger('slide', [
      state('*', style({ transform: 'translateX(0)' })), // Add a default state
      transition('* => prev', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' }))
      ]),
      transition('* => next', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AboutTeamCarouselComponent {
header:string[]=[
  "Team","Management"
]
members:Member[]=[
  {
    image:"https://res.cloudinary.com/dyl3rncv3/image/upload/v1679985792/elewa-group-website/elewa-team-members/lemmy_oosngt.jpg",
    name:"Stephen Mwaura",
    title:"Software Engineer"
  },
  {
    image:"https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/jente-elewa_wbqyyi.jpg",
    name:"Jente Rosseel",
    title:"Founder, Managing Partner"
  },
  {
    image:"https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/ken-elewa_ydwzop.jpg",
    name:"Kennedy Adhola",
    title:"Operations & Partnerships"
  },
  {
    image:"https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/jente-elewa_wbqyyi.jpg",
    name:"Peter Reinartz",
    title:"Executive Chairman"
  },
  {
    image:"https://res.cloudinary.com/dyl3rncv3/image/upload/v1679660055/elewa-group-website/elewa-team-members/noella-elewa_g6tquq.jpg",
    name:"Noella Mwanzia",
    title:"Software Engineer"
  },{
    image:"https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/ian-elewa_bejey9.jpg",
    name:"Ian Odhiambo",
    title:"Founder Kujali"
  },
  {
    image:"https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/jane-elewa_yyybka.jpg",
    name:"Jane Njoroge",
    title:"Software Developer"
  },
  {
    image:"https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_600/v1679657743/elewa-group-website/elewa-team-members/shawn-elewa_tt3iit.jpg",
    name:"Shawn Chiama",
    title:"Software Engineer"
  }

]
// Initialize the current member index to the first member.
currentMemberIndex: number = 0;

animationState: string = 'next';
scrollLeft() {
  if (this.currentMemberIndex > 0) {
    this.currentMemberIndex--;
    this.animationState = 'prev';
  }
}

scrollRight() {
  if (this.currentMemberIndex < this.members.length - 1) {
    this.currentMemberIndex++;
    this.animationState = 'next';
  }
}

}
