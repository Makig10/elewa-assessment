import { Component } from '@angular/core';
interface Card{
  head:string,
  description:string
}
@Component({
  selector: 'app-invest-key-figure-card',
  templateUrl: './invest-key-figure-card.component.html',
  styleUrls: ['./invest-key-figure-card.component.css']
})
export class InvestKeyFigureCardComponent {
cards:Card[]=[
  {
    head:"1.3M",
    description:"Approx. number of Kenyan talents reaching the age of 18 in 2022"
  },
  {
    head:"5M",
    description:"number of East-Africans(EAC) reaching the age of 18 in 2022"
  },
  {
    head:"2022",
    description:"Democratic Republic of Congo joins the East African Community"
  },
  {
    head:"1.5M",
    description:"The number of unfilled IT vacancies in the US and EU markets"
  },
  {
    head:"10M",
    description:"Number of technical vacancies by 2030"
  },
  {
    head:"2050",
    description:"Africa holds the worlds largest workforce"
  },
  {
    head:"$4.6M",
    description:"Startup funding raised by African standups in 2022"
  },
  {
    head:"310%",
    description:"Increase in startup funding for companies in Kenya"
  }


]
}
