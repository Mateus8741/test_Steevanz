import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() typeBtn!: 'next' | 'prev' | 'sub'| 'home';
  @Input() title!: string;
}
