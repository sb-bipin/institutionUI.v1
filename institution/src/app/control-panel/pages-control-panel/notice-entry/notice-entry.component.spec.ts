import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeEntryComponent } from './notice-entry.component';

describe('NoticeEntryComponent', () => {
  let component: NoticeEntryComponent;
  let fixture: ComponentFixture<NoticeEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
