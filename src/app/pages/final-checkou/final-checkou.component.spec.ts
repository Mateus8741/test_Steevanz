import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCheckouComponent } from './final-checkou.component';

describe('FinalCheckouComponent', () => {
  let component: FinalCheckouComponent;
  let fixture: ComponentFixture<FinalCheckouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCheckouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalCheckouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
