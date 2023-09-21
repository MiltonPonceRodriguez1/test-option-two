import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements DoCheck{
  @Input() public userName: string;
  @Input() public numberCard: string;

  constructor() {
    this.userName = '';
    this.numberCard = '';
  }

  ngDoCheck(): void {
    this.numberCard = this.numberCard.replace(' ', '');
  }

  ccFormat( number: string ): string {
    let v = number.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let matches = v.match(/\d{4,16}/g);
    let match = matches && matches[0] || '';
    let parts = [];

    for (let i=0; i < match.length; i+=4 ) {
      parts.push(match.substring(i, i+4));
    }
    
    let format = (parts.length) ? parts.join(' ') : number;
    return format;
  }
}
