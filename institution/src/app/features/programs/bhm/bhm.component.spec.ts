import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhmComponent } from './bhm.component';

describe('BhmComponent', () => {
  let component: BhmComponent;
  let fixture: ComponentFixture<BhmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BhmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
