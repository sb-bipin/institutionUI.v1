import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesControlPanelComponent } from './pages-control-panel.component';

describe('PagesControlPanelComponent', () => {
  let component: PagesControlPanelComponent;
  let fixture: ComponentFixture<PagesControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesControlPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
