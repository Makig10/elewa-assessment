import { Component } from '@angular/core';

@Component({
  selector: 'app-invest-creative-hub',
  templateUrl: './invest-creative-hub.component.html',
  styleUrls: ['./invest-creative-hub.component.css']
})
export class InvestCreativeHubComponent {
title:string="The Elewa Creative Hub"
paragraphs:string[]=[
  "Coming soon; The Elewa Creative Hub Lies at the heart of our organization. A two-acre property at the center of Nairobi's creative district, the hub connects all Elewa's Activities under a single banner.",
  "",
  "Through partnerships with creative community, the Elewa Hub will organize vibrant activites that bring talents from different fields (tech, business, art, fashion) together to nurture continuous innovation."
]
imageLink:string="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg"
}

