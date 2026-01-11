import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbaFComponent } from './bba-f.component';

describe('BbaFComponent', () => {
  let component: BbaFComponent;
  let fixture: ComponentFixture<BbaFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BbaFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbaFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
