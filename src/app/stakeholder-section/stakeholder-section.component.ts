import { Component } from '@angular/core';

@Component({
  selector: 'app-stakeholder-section',
  templateUrl: './stakeholder-section.component.html',
  styleUrls: ['./stakeholder-section.component.css']
})
export class StakeholderSectionComponent {
title:string="Elewa NV, is a multi-stakeholder cooperation"
paragraphs:string[]=[
  "At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities.",
  "Elewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group."
]
imageLink:string="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
}

