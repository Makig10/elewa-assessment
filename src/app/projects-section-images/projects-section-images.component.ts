import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projects-section-images',
  templateUrl: './projects-section-images.component.html',
  styleUrls: ['./projects-section-images.component.css'],
  animations: [
    trigger('slide', [
      state('right', style({ transform: 'translateX(100%)' })),
      state('left', style({ transform: 'translateX(0)' })),
      transition('* => right', animate('300ms')),
      transition('* => left', animate('300ms'))])]
})
export class ProjectsSectionImagesComponent {
imageLinks:string[]=[
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380443/elewa-group-website/client-logos/ms-adc_y96dms.jpg",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380412/elewa-group-website/client-logos/Spotlights_7_pplnvm.jpg",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/Kenya_Scouts_Association_kcoka5.svg",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/wwf-4-logo-png-transparent_tbkfcq.png",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/vvob-logo_qyvjbp.jpg",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/farmbetter-logo_x2acda.png",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/it_volk_black_logo_image_iowrws.png",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/hoplit-logo_nsryy7.webp",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/2017-GIZ-Logo_htdnpa.png",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/Enabel-logo_afiel7.png",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/syndicyourself_logfo_qiqrex.png",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/adc-logo_dgxpul.jpg"
]
currentState = 'left';
  private animationInterval: any;

  ngOnInit() {
    // Automatically toggle the animation state every 2 seconds (adjust as needed)
    this.animationInterval = setInterval(() => this.toggleState(), 2000);
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.animationInterval);
  }

  toggleState() {
    this.currentState = this.currentState === 'left' ? 'right' : 'left';
  }
}

