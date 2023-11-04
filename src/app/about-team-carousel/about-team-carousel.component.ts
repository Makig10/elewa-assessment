import { Component } from '@angular/core';
interface Member{
  image:string,
  name:string,
  title:string,

}
@Component({
  selector: 'app-about-team-carousel',
  templateUrl: './about-team-carousel.component.html',
  styleUrls: ['./about-team-carousel.component.css']
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
  }

]
}


