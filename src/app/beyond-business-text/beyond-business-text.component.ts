import { Component } from '@angular/core';

@Component({
  selector: 'app-beyond-business-text',
  templateUrl: './beyond-business-text.component.html',
  styleUrls: ['./beyond-business-text.component.css']
})
export class BeyondBusinessTextComponent {
title:string="Beyond business";
paragraghs:string[]=["We channel a good amount of our resources into giving back",
"Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers",
"These projects don't necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term."]
}
