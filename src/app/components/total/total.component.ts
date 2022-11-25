import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'],
})
export class TotalComponent {
  @Input() price!: string;
  @Input() text!: string;
  @Input() type!: 'lg' | 'sm';
}
