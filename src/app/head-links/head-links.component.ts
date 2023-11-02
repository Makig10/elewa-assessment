import { Component } from '@angular/core';

@Component({
  selector: 'app-head-links',
  templateUrl: './head-links.component.html',
  styleUrls: ['./head-links.component.css']
})
export class HeadLinksComponent {
  links: string[] = ['Home', 'About us', 'Social impact', 'Invest', 'Venture Labs', 'Brands', 'Careers', 'Contacts'];
}
