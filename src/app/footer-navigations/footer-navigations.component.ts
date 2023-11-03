import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-navigations',
  templateUrl: './footer-navigations.component.html',
  styleUrls: ['./footer-navigations.component.css']
})
export class FooterNavigationsComponent {

headquarters:string[]=[
  "Headquarters",
  "The Promenade, 19 General",
  "Mathenge Rd",
  "Nairobi,Kenya"
]
contacts:string[]=[
  "Contact",
  "+254 78 92 27 755",
  "E info@elewa.co.ke"
]
navigations:string[]=[
  "Navigation",
  "About us",
  "Social impact",
  "Invest",
  "News",
  "Contact"
]
brands:string[]=[
  "Elewa",
  "Italanta",
  "Venture Labs"
]
privacy:string[]=[
  "Privacy",
  "Terms and conditions",
  "Cookie preferences"
]
}
