import { Component } from '@angular/core';
interface Section{
  value: string,
  title: string
}
@Component({
  selector: 'app-social-impact-data',
  templateUrl: './social-impact-data.component.html',
  styleUrls: ['./social-impact-data.component.css']
})
export class SocialImpactDataComponent {
  sections: Section[] = [
    { value: '733+', title: 'People trained' },
    { value: '733k', title: 'careers launched' },
    { value: '200+', title: 'projects finished' },
    { value: '56', title: 'Investors' }
  ];
}
