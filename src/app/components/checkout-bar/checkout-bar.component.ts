import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-bar',
  templateUrl: './checkout-bar.component.html',
  styleUrls: ['./checkout-bar.component.scss'],
})
export class CheckoutBarComponent {
  @Input() type!: 'light1' | 'light2' | 'light3' | 'light4';
}
