import { Component, Input } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type!: 'sm' | 'x-sm' | 'md' | 'lg' | 'offer';

  dataForm!: FormGroup;

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      Firstname: new FormControl('', [Validators.required]),
      Lastname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [Validators.required]),
      Location: new FormControl('', [Validators.required]),
    });
  }

  get title() {
    return this.dataForm.get('title')!;
  }

  submit() {
    console.log('testando forms');
  }
}
