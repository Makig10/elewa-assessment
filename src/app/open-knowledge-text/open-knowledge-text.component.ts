import { Component } from '@angular/core';

@Component({
  selector: 'app-open-knowledge-text',
  templateUrl: './open-knowledge-text.component.html',
  styleUrls: ['./open-knowledge-text.component.css']
})
export class OpenKnowledgeTextComponent {
title:string="Open knowledge";
paragraghs:string[]=["What we learn, we share. Through community events, open knowledge repositories, regular teaching moments (everyone a teacher) and academic partnerships."
,"We build for today,with a lens on tomorrow"]
}
