import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-images',
  templateUrl: './footer-images.component.html',
  styleUrls: ['./footer-images.component.css']
})
export class FooterImagesComponent {
logoLink:string="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"
imageLinks:string[]=[
  "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/facebook_lhhwk2.svg",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690295/elewa-group-website/Icons/SVG/_Social/instagram_x8ujcq.svg",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690294/elewa-group-website/Icons/SVG/_Social/linkedin_x8smhm.svg"
]
}

