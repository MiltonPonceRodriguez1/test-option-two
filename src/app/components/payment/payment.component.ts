import { Component, DoCheck } from '@angular/core';
import { CreditCard } from '../../interfaces/creditCard';

import swal from'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements DoCheck {
  creditCard: CreditCard;
  test: string;

  constructor() {
    this.creditCard = {
      userName: 'Howard Pinsky',
      numberCard: '1234392423943294',
      expiration: '02/25',
      cvv: 231,
    };

    this.test = this.creditCard.numberCard.toString().replace(/(\d{4}(?!\s))/g, "$1 ");
  }
  
  ngDoCheck(): void {
    this.creditCard.numberCard = this.ccFormat(this.creditCard.numberCard);
  }
  
  onSubmit(): void {
    if(
      this.creditCard.cvv.toString().length === 3 &&
      this.creditCard.userName.length < 50 &&
      this.creditCard.numberCard.length === 19 &&
      this.creditCard.expiration.length === 5
    ) {
      swal.fire('Success...', 'The payment was successfully', 'success');
    } else {
      swal.fire('Error...', 'Missing data to complete', 'error');

    }
  }

  onCancel(): void {
    this.creditCard = {
      userName: '',
      numberCard: '',
      expiration: '',
      cvv: '',
    };
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
